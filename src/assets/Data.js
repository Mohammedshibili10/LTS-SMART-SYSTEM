// ELV HOME SERVICE DATA

import light from '../assets/images/lightcontrol.png'
import hvac from '../assets/images/HVAC.png'
import automated from '../assets/images/automated.png'
import intercom from '../assets/images/intercom.png'
import energy from '../assets/images/energy.png'
import grms from '../assets/images/GRMS.png'

import firsticon from '../assets/images/firsticon.svg'
import secndicon from '../assets/images/secndicon.svg'
import thirdicon from '../assets/images/thirdicon.svg'
import fourthicon from '../assets/images/fourthicon.svg'
import fifthicon from '../assets/images/fifthicon.svg'
import sixthicon from '../assets/images/sixthicons.svg'



export const servicesData = [{
    title: "Lighting Control Systems",
    description: "Smart lighting control for residential and commercial spaces, enabling automation, energy savings, and seamless dimming and scene management, compatible with major lighting protocols.",
    points: [
        { icon: firsticon, text: "Centralized or distributed control" },
        { icon: firsticon, text: "Dimming, scene, and RGBW mood lighting" },
        { icon: firsticon, text: "Compatible with KNX, DALI, DMX, Lutron, Dynalite, Cresnet, 0–10V" },
        { icon: firsticon, text: "Smooth, flicker-free performance" },
        { icon: firsticon, text: "Design, engineering, and compatibility support" },
    ],
    image: light,

}, {
    title: "HVAC & Climate Control",
    description: "Intelligent HVAC and climate control for residential and commercial spaces, enhancing comfort, energy efficiency, and seamless system management.",
    points: [
        { icon: secndicon, text: "Supports VRF, DX, VAV, chilled water, and package units" },
        { icon: secndicon, text: "Integrates with KNX, BACnet, Modbus, Dynalite, Lutron, and thermostats" },
        { icon: secndicon, text: "Automated scheduling and energy optimization" },
        { icon: secndicon, text: "Controls ventilation, FAHU, AHU, and underfloor heating" },
        { icon: secndicon, text: "Real-time monitoring of temperature, humidity, and CO₂" },
        { icon: secndicon, text: "Design, engineering, and integration support" },
    ],
    image: hvac,



},
{
    title: "Automated Blinds & Curtains",
    description: "Smart shading solutions for residential and commercial spaces, enhancing comfort, privacy, and energy efficiency through automated daylight and heat management.",
    points: [
       { icon: thirdicon, text: "Supports all major motorized shades and blinds"},
       { icon: thirdicon, text: "Integrates with KNX, Somfy RTS, Zigbee, Z-Wave, Lutron, and Dynalite"},
       { icon: thirdicon, text: "Automated sunlight control with lux sensors"},
       { icon: thirdicon, text: "Scene-based modes for convenience and privacy"},
       { icon: thirdicon, text: "Ultra-quiet motors with design and integration support"}
    ],
    image: automated,
    
},
{
    title: "Intercom, Security & Alarm Systems",
    description: "Smart, fully automated security solutions integrated into your home automation platform for unified control, enhanced safety, and intelligent operation.",
    points: [
         { icon: fourthicon, text:  "Unified control via app or touchscreen"},
         { icon: fourthicon, text:  "Smart access: biometric, PIN, RFID, mobile key, geofencing"},
         { icon: fourthicon, text:  "CCTV feeds with AI alerts"},
         { icon: fourthicon, text:  "Smooth, flicker-free performance"},
         { icon: fourthicon, text:  "Intrusion & safety sensors with automated notifications"}
    ],
    image: intercom,
   
},
{
    title: "Energy Management",
    description: "Optimize energy use, cut costs, and monitor everything from a singl platform. ",
    points: [
        { icon: fifthicon, text: "Real-time monitoring of lighting, HVAC, and other loads"},
        { icon: fifthicon, text: "Unified energy data via M-Bus, Modbus, and BMS"},
        { icon: fifthicon, text: "EV charger monitoring and control"},
        { icon: fifthicon, text: "Automated load management and peak shaving"},
        { icon: fifthicon, text: "Visualize data, trends, and alerts in one application"}
    ],
    image: energy,
   
},
{
    title: "GRMS & Hospitality Automation",
    description: "Smart guest room and hospitality control for enhanced comfort, energy efficiency, personalized experiences, and seamless automation.",
    points: [
         { icon: sixthicon, text:  "Centralized control of lighting, HVAC, shades, and media"},
         { icon: sixthicon, text:  "Energy optimization and automated room status updates"},
         { icon: sixthicon, text:  "Integration with hotel PMS for check-in/check-out and housekeeping"},
         { icon: sixthicon, text:  "Personalized guest scenes and voice control"},

    ],
    image: grms,
},
]



// ELV IT SERVICE DATA

// image
import cctv from '../assets/images/cctv.png'
import access from '../assets/images/acess.png'
import intercomsytm from '../assets/images/intercomsystem.png'
import door from '../assets/images/doormotor.png'
import network from '../assets/images/network.png'
import smatv from '../assets/images/smatv.png'

// icons

import cctvicon from '../assets/images/cctvicon.svg'
import accessicon from '../assets/images/accessicon.svg'
import intercomicon from '../assets/images/intercomicon.svg'
import  dooricon from '../assets/images/dooricon.svg'
import networkicon from '../assets/images/networkicon.svg'
import smatvicon from '../assets/images/smatvicon.svg'



export const ITservicesData = [{
    title: "CCTV & Video Surveillance Systems",
    description: "Enterprise-grade video surveillance for residential, commercial, andindustrial spaces, providing real-time monitoring, advanced analytics, and reliable security. Fully SIRA-compliant and integrable with access control, intercom, and building management systems.",
    points: [
        { icon: cctvicon, text: "AI-enabled IP, ANPR, thermal, PTZ, dome, and bullet cameras" },
        { icon: cctvicon, text: "Centralized NVR/DVR with AI analytics and multi-site monitoring" },
        { icon: cctvicon, text: "Integrates with access control, intercoms, and building systems" },
        { icon: cctvicon, text: "High-capacity storage with cloud backup" },
        { icon: cctvicon, text: "Turnkey deployment with design, installation, and support" },
    ],
    image: cctv,

}, {
    title: "Access Control Systems",
    description: "IEnterprise-class, SIRA-compliant access control solutions for secure, efficient, and seamless facility management. Fully integrable with elevators, turnstiles, fire alarms, and visitor management platforms.",
    points: [
        { icon: accessicon, text: "Smart card, biometric, and mobile access" },
        { icon: accessicon, text: " Centralized server with real-time alerts and reports" },
        { icon: accessicon, text: "Standalone systems for remote deployments" },
        { icon: accessicon, text: "Turnstiles and lift controllers" },
        { icon: accessicon, text: "Electric locks, door contacts, and exit buttons"},
        { icon: accessicon, text: "Backup power and enrollment devices" },
        { icon: accessicon, text: "Turnkey deployment with installation and support" },
    ],
    image: access,



},
{
    title: "Intercom Systems",
    description: "Advanced intercom solutions for residential, commercial, and gated communities, enabling real-time visitor verification and seamless communication. Fully integrable with access control, CCTV, and building management systems.",
    points: [
       { icon: intercomicon, text: "Outdoor and indoor HD touchscreen units"},
       { icon: intercomicon, text: "Central/guard units for visitor verification and emergency management"},
       { icon: intercomicon, text: "Mobile/IP app access for remote control"},
       { icon: intercomicon, text: "Door and electric lock control"},
       { icon: intercomicon, text: "CCTV integration for real-time monitoring"},
       { icon: intercomicon, text: "Reliable structured cabling"},
       { icon: intercomicon, text: "Turnkey deployment with design, installation, and support"},
    ],
    image: intercomsytm,
    
},
{
    title: "Automated Gate, Barrier & Door Motor Systems",
    description: "High-performance automated gates, barriers, and door motors for residential, commercial, and industrial spaces, ensuring secure, smooth, and reliable operation. Fully integrable with access control, intercom, and security systems.",
    points: [
         { icon: dooricon, text:  "Motorized gates, garage, and shutter door systems"},
         { icon: dooricon, text:  "Boom & vehicle barriers for controlled entry"},
         { icon: dooricon, text:  "Seamless integration with access control and ANPR"},
         { icon: dooricon, text:  "Safety devices and sensors for secure operation"},
         { icon: dooricon, text:  "Remote, app, and centralized control options"},
         { icon: dooricon, text:  "Emergency release and backup power"}
    ],
    image: door,
   
},
{
    title: "Networking, Wi-Fi & PABX Systems",
    description: "Reliable, high-speed networking and communication systems for residential, commercial, and industrial spaces, fully integrable with security, automation, and building management platforms. ",
    points: [
        { icon: networkicon, text: "Structured cabling & fiber backbone for LAN/WAN and FTTH"},
        { icon: networkicon, text: "Enterprise-grade Wi-Fi with secure, centralized management"},
        { icon: networkicon, text: "Scalable IP-enabled PABX for advanced voice communication"},
        { icon: networkicon, text: "Seamless integration with security and building systems"},
        { icon: networkicon, text: "Turnkey deployment with design, installation, and support"}
    ],
    image: network,
   
},
{
    title: "SMATV & Audio-Visual Systems",
    description: "Premium audiovisual solutions for residential, commercial, and mixed-use spaces, delivering high-quality video, immersive sound, and seamless integration.",
    points: [
         { icon: smatvicon, text:  "Multi-room TV distribution and amplification"},
         { icon: smatvicon, text:  "Background music, PA, conferencing, and paging systems"},
         { icon: smatvicon, text:  "Server-based AV management for centralized control"},
         { icon: smatvicon, text:  "Indoor & outdoor high-definition AV equipment"},
         { icon: smatvicon, text:  "Remote monitoring and management"},
         { icon: smatvicon, text:  "Turnkey deployment with installation and support"},
    ],
    image: smatv,
},
]



//CINEMA & AV SOLUTIONS DATA


// image
import home from '../assets/images/home.png'
import video from '../assets/images/videowall.png'
import music from '../assets/images/music.png'
import multiroom from '../assets/images/multiroom.png'
import digitalsignage from '../assets/images/digitalsignage.png'


// icons

import homeicon from '../assets/images/videoicon.svg'
import mediawallicon from '../assets/images/mediawallicon.svg'
import musicicon from '../assets/images/musicicon.svg'
import  multiroomicon from '../assets/images/multiroomicon.svg'
import digitalicon from '../assets/images/digitalicon.svg'





export const CinemaAvdata = [{
    title: "Home Cinema / Private Theatre",
    description: "Create a premium cinematic experience with fully automated AV setups integrated into your smart home system.Enterprise-grade video surveillance for residential, commercial, andindustrial spaces, providing real-time monitoring, advanced analytics, and reliable security. Fully SIRA-compliant and integrable with access control, intercom, and building management systems.",
    points: [
        { icon: homeicon, text: "4K/8K projectors or large-format LED/LCD screens " },
        { icon: homeicon, text: "Dolby Atmos / DTS-X surround sound" },
        { icon: homeicon, text: "Automated screens, curtains, and lighting" },
        { icon: homeicon, text: "Scene-based control for Movie, Gaming, or Music modes" },
        { icon: homeicon, text: "Integration with Crestron, Control4, Savant, ELAN, and voice assistants" },
    ],
    image:home,

}, {
    title: "Video Wall / Media Wall",
    description: "High-resolution, modular video walls delivering immersive visuals and integrated audio for residential and commercial spaces.",
    points: [
        { icon: mediawallicon, text: "Modular LED/LCD panels for flexible layouts" },
        { icon: mediawallicon, text: " Multi-source content: TV, streaming, presentations" },
        { icon: mediawallicon, text: "Centralized control via Crestron, Control4, Savant, ELAN" },
        { icon: mediawallicon, text: "Wall-mounted or freestanding configurations" },
        { icon: mediawallicon, text: "Integrated audio for immersive cinematic experience"},
      
    ],
    image: video,



},

{
    title: "Background Music & PA Systems",
    description: "Hi-Fi multi-zone audio distribution for immersive sound, mood-setting, and announcements in residential and commercial spaces.",
    points: [
         { icon: musicicon, text:  "Multi-zone streaming with individual volume/source control"},
         { icon: musicicon, text:  "High-fidelity AV-over-IP or matrix switching"},
         { icon: musicicon, text:  "Public announcement and emergency paging"},
         { icon: musicicon, text:  "Centralized control via app, touchscreen, or automation "},
         { icon: musicicon, text:  "Remote, app, and centralized control options"},
         { icon: musicicon, text:  "Integration with Crestron, Control4, Savant, ELAN"}
    ],
    image: music,
   
},
{
    title: "Multi-Room AV Distribution",
    description: "Seamlessly deliver audio and video across multiple rooms with centralized control and scalable integration.",
    points: [
        { icon: multiroomicon, text: "AV-over-IP or HDMI/HDBaseT distribution"},
        { icon: multiroomicon, text: "Centralized source management for TVs, projectors, and speakers"},
        { icon: multiroomicon, text: "Control via automation panels or mobile apps"},
        { icon: multiroomicon, text: "Scene-based audio/video for selected zones"},
        { icon: multiroomicon, text: "Scalable for residential, hospitality, and commercial projects"}
    ],
    image: multiroom,
   
},
{
    title: "Digital Signage / Interactive Displays",
    description: " Smart displays for information, advertising, and wayfinding, fully integrated with automation systems.",
    points: [
         { icon: digitalicon, text:  "Interactive or static digital signage"},
         { icon: digitalicon, text:  "Integration with content servers and scheduling"},
         { icon: digitalicon, text:  "Multi-screen synchronized playback"},
         { icon: digitalicon, text:  "Linked with automation for lighting and ambience"},
        
    ],
    image: digitalsignage,
},
]
