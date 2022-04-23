import { DEVICE_type } from 'uadetect';
const logoText = document.getElementById('logoText');
if (DEVICE_type === 'mobile') {
    logoText.style.display = 'none';
}
