/**
 * DataVec - Dynamic Client-side Behavior
 * Handles the Enterprise pricing calculator, Chart.js integration, and FAQ accordion toggles.
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeCalculator();
  initializeFAQ();
});

/**
 * Enterprise Pricing Calculator
 */
function initializeCalculator() {
  // Provider details
  const NAMES = {
    vercel: 'Vercel Edge Functions',
    aws: 'AWS Lambda',
    cloudflare: 'Cloudflare Workers',
    azure: 'Azure Functions',
    gcp: 'Google Cloud Run'
  };

  const COLORS = {
    vercel: '#BA7517',
    aws: '#E24B4A',
    cloudflare: '#f77f00',
    azure: '#185FA5',
    gcp: '#534AB7'
  };

  // Compute metrics helper functions
  const getDuration = (intensity) => {
    return intensity === 'light' ? 0.15 : intensity === 'medium' ? 0.6 : 2.5; // in seconds
  };

  const getMemory = (intensity) => {
    return intensity === 'light' ? 0.25 : intensity === 'medium' ? 0.5 : 1.0; // in GB
  };

  /**
   * Estimate monthly bill for a given provider
   * @param {string} provider - Provider ID
   * @param {number} reqM - Monthly requests in millions
   * @param {string} intensity - Compute intensity ('light' | 'medium' | 'heavy')
   * @param {number} bandwidthGB - Monthly bandwidth in GB
   * @returns {number} Estimated monthly cost in USD
   */
  function estimateBill(provider, reqM, intensity, bandwidthGB) {
    const d = getDuration(intensity);
    const m = getMemory(intensity);
    const totalRequests = reqM * 1e6;

    if (provider === 'vercel') {
      const invoices = Math.max(0, reqM - 10) * 0.60;
      const cpu = ((totalRequests * d * 0.4) / 3600) * 0.128;
      const memory = ((totalRequests * d * m) / 3600) * 0.0106;
      const bandwidth = Math.max(0, bandwidthGB - 1000) * 0.15;
      return Math.max(20, invoices + cpu + memory + bandwidth);
    }
    
    if (provider === 'aws') {
      const invoices = Math.max(0, reqM - 1) * 0.20;
      const compute = Math.max(0, totalRequests * d * m - 400000) * 0.0000166667;
      const apigw = reqM * 3.50;
      const bandwidth = Math.max(0, bandwidthGB - 100) * 0.09;
      const logs = (totalRequests * 5000 / 1e9) * 0.50;
      return Math.max(5, invoices + compute + apigw + bandwidth + logs);
    }
    
    if (provider === 'cloudflare') {
      const requestsOverage = Math.max(0, reqM - 10) * 0.30;
      const cpuOverage = Math.max(0, totalRequests * d * 1000 - 30e6) * 0.02 / 1e6;
      return Math.max(5, 5 + requestsOverage + cpuOverage);
    }
    
    if (provider === 'azure') {
      const executions = Math.max(0, reqM - 1) * 0.20;
      const compute = Math.max(0, totalRequests * d * m - 400000) * 0.000016;
      const bandwidth = Math.max(0, bandwidthGB - 100) * 0.087;
      return Math.max(5, executions + compute + bandwidth);
    }
    
    if (provider === 'gcp') {
      const cpu = Math.max(0, totalRequests * d - 180000) * 0.000024;
      const memory = Math.max(0, totalRequests * d * m - 360000) * 0.0000025;
      const requests = Math.max(0, reqM - 2) * 0.40;
      const bandwidth = Math.max(0, bandwidthGB - 1) * 0.12;
      return Math.max(5, cpu + memory + requests + bandwidth);
    }
    
    return 0;
  }

  // Format currency
  const formatCurrency = (amount) => '$' + Math.round(amount).toLocaleString();

  let chartInstance = null;

  function updateCalculator() {
    const providerSelect = document.getElementById('provider');
    const reqSelect = document.getElementById('req');
    const computeSelect = document.getElementById('compute');
    const bwSelect = document.getElementById('bw');

    if (!providerSelect || !reqSelect || !computeSelect || !bwSelect) return;

    const provider = providerSelect.value;
    const reqM = parseFloat(reqSelect.value);
    const intensity = computeSelect.value;
    const bandwidthGB = parseFloat(bwSelect.value);

    // Calculate against all providers to find cheapest
    const providers = ['vercel', 'aws', 'cloudflare', 'azure', 'gcp'];
    const bills = providers.map(p => estimateBill(p, reqM, intensity, bandwidthGB));
    const cheapestBill = Math.min(...bills);

    // Flat rate is 22.5% below the cheapest provider, floor of $2,500
    const flatRate = Math.max(cheapestBill * 0.775, 2500);

    const selectedProviderBill = estimateBill(provider, reqM, intensity, bandwidthGB);
    const savings = selectedProviderBill - flatRate;

    // Update UI Cards
    const labelElem = document.getElementById('compLabel');
    const billElem = document.getElementById('compBill');
    const flatRateElem = document.getElementById('flatRate');
    const savingsLineElem = document.getElementById('savingsLine');

    if (labelElem) labelElem.textContent = NAMES[provider] + ' Est. Bill';
    if (billElem) billElem.textContent = formatCurrency(selectedProviderBill) + '/mo';
    if (flatRateElem) flatRateElem.textContent = formatCurrency(flatRate) + '/mo';
    
    if (savingsLineElem) {
      if (savings > 0) {
        savingsLineElem.textContent = 'You save ' + formatCurrency(savings) + '/mo vs ' + NAMES[provider].split(' ')[0];
        savingsLineElem.style.color = 'var(--accent2)';
      } else {
        savingsLineElem.textContent = 'DataVec provides stable enterprise flat rate billing';
        savingsLineElem.style.color = 'var(--text2)';
      }
    }

    // Chart.js Data
    const labels = [NAMES[provider].split(' ')[0], 'DataVec'];
    const data = [Math.round(selectedProviderBill), Math.round(flatRate)];
    const bgColors = [COLORS[provider], '#00e090'];

    const ctx = document.getElementById('chart');
    if (!ctx) return;

    if (chartInstance) {
      chartInstance.data.labels = labels;
      chartInstance.data.datasets[0].data = data;
      chartInstance.data.datasets[0].backgroundColor = bgColors;
      chartInstance.update();
    } else {
      // Create Chart
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: bgColors,
            borderRadius: 6,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => ' ' + formatCurrency(context.parsed.y) + '/mo'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                font: { size: 13, weight: '500' },
                color: '#d8eaf8',
                maxRotation: 0
              },
              grid: { display: false },
              border: { display: false }
            },
            y: {
              ticks: {
                font: { size: 11 },
                color: '#6a8fae',
                callback: (value) => value >= 1000 ? '$' + Math.round(value / 1000) + 'K' : '$' + value
              },
              grid: { color: 'rgba(23, 32, 53, 0.4)' },
              border: { display: false }
            }
          }
        }
      });
    }
  }

  // Set up listeners
  ['provider', 'req', 'compute', 'bw'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) elem.addEventListener('change', updateCalculator);
  });

  // Run first estimation
  updateCalculator();
}

/**
 * FAQ Accordion Toggles
 */
function initializeFAQ() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  const items = faqList.querySelectorAll('.faq-item');
  items.forEach(item => {
    const questionButton = item.querySelector('.faq-q');
    if (!questionButton) return;

    questionButton.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close other accordion items for clean UX (optional, let's do it for a premium feel!)
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherButton = otherItem.querySelector('.faq-q');
          if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('open');
      questionButton.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
}
