let dailyConsumption = 1.75;
let monthlyConsumption = 172;
let isHighConsumption = false;

function updateConsumption() {

    dailyConsumption += (Math.random() - 0.5) * 0.1;
    monthlyConsumption += (Math.random() - 0.5) * 2;


    const dailyCardValue = document.querySelector('.consumption-card:first-child .consumption-value');
    const monthlyCardValue = document.querySelector('.consumption-card:last-child .consumption-value');

    if (dailyCardValue) {
        dailyCardValue.textContent = dailyConsumption.toFixed(2);
    }
    if (monthlyCardValue) {
        monthlyCardValue.textContent = Math.round(monthlyConsumption);
    }


    const statusIndicator = document.getElementById('statusIndicator');
    if (statusIndicator) {
        if (dailyConsumption > 2.0 && !isHighConsumption) {
            isHighConsumption = true;
            statusIndicator.className = 'status-indicator status-high';
            statusIndicator.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Consumo Alto - Estás consumiendo más de lo habitual</span>';
        } else if (dailyConsumption <= 2.0 && isHighConsumption) {
            isHighConsumption = false;
            statusIndicator.className = 'status-indicator status-normal';
            statusIndicator.innerHTML = '<i class="fas fa-check-circle"></i><span>Consumo Normal</span>';
        }
    }
}


setInterval(updateConsumption, 20000);


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


function handleDeviceToggle(event) {
    const toggle = event.target;
    const deviceItem = toggle.closest('.device-item');
    const deviceNameElement = deviceItem.querySelector('.device-name');
    const deviceOnTimeElement = deviceItem.querySelector('.device-on-time'); // Get the element for "Encendido" text
    const deviceName = deviceNameElement ? deviceNameElement.textContent : 'Dispositivo Desconocido';

    if (toggle.checked) {
        console.log(`${deviceName} ha sido ENCENDIDO.`);
        if (deviceOnTimeElement) {
            deviceOnTimeElement.textContent = 'Encendido'; 
            
        }

    } else {
        console.log(`${deviceName} ha sido APAGADO.`);
        if (deviceOnTimeElement) {
            deviceOnTimeElement.textContent = 'Apagado'; 
        }
        
    }
}


document.querySelectorAll('.device-status-toggle input[type="checkbox"]').forEach(toggle => {
    toggle.addEventListener('change', handleDeviceToggle);
});


setTimeout(() => {
    dailyConsumption = 2.3;
    updateConsumption();
}, 10000);