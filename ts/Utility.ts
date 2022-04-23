import { DEVICE_type, DEVICE_finiteType, OS } from 'uadetect'

const logoText = document.getElementById('logoText')

if (DEVICE_type === 'mobile') {
    logoText.style.display = 'none'
}