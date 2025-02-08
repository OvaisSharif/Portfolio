import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import linkedin_icon from './linkedin_icon.png';
import twitter_icon from './twitter_icon.png';
import github_icon from './github_icon.png'
import github_icon_dark from './github_icon_dark.png'
import home_logo from './home_logo.png';
import react_logo from './react-logo.svg'
import redux_logo from './redux-logo.svg'
import next_logo from './next-logo.svg'
import javascript_logo from './javascript-logo.svg'
import sass_logo from './scss-logo.svg'
import bootstrap_logo from './bootstrap-logo.svg'
import tailwind_logo from './tailwind-logo.svg'
import css_logo from './css-logo.svg'
import html_logo from './html-logo.svg'
import git_logo from './git-logo.svg'
import typescript_logo from './typescript-logo.svg'
import accessibility_logo from './accessibility-logo.svg'


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    linkedin_icon,
    twitter_icon,
    github_icon,
    github_icon_dark,
    home_logo,
    react_logo,
    redux_logo,
    next_logo,
    javascript_logo,
    sass_logo,
    bootstrap_logo,
    tailwind_logo,
    css_logo,
    html_logo,
    git_logo,
    typescript_logo,
    accessibility_logo
};

export const skillName = [
    { name: 'React',imgSrc: assets.react_logo},
    { name: 'Redux',imgSrc: assets.redux_logo},
    { name: 'Next.Js',imgSrc: assets.next_logo},
    { name: 'Javascript',imgSrc: assets.javascript_logo},
    { name: 'Sass',imgSrc: assets.sass_logo},
    { name: 'Bootsrap',imgSrc: assets.bootstrap_logo}, 
    { name: 'Tailwind',imgSrc: assets.tailwind_logo},    
    { name: 'CSS',imgSrc: assets.css_logo},  
    { name: 'HTML',imgSrc: assets.html_logo},    
    { name: 'GIT',imgSrc: assets.git_logo},   
    { name: 'Typescript',imgSrc: assets.typescript_logo},  
    { name: 'Accessibility',imgSrc: assets.accessibility_logo},  

  ];

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { company: 'Gray Matrix Solutions | Frontend Engineer', title: 'Talkk.ai ( Conversational AI Webapp )', description:'A Conversational AI web application that enhances user interaction through natural language processing.', techstack: 'React, Redux, JavaScript, Sass, Bootstrap, Talkk CMS.' },
    { company: 'Gray Matrix Solutions | Frontend Engineer', title: 'RMA QMS ( Mortgage Webapp )', description:'A mortgage web application designed to streamline the quality management system for the mortgage industry.', techstack: 'React, Context API, JavaScript, Sass, Bootstrap, HTML.' },
    { company: 'Gray Matrix Solutions | Frontend Engineer', title: 'Insyghts ( Human Resource System Webapp )', description:'A human resource system web application that simplifies employee management, recruitment, and analytics.', techstack: 'React, JavaScript, CSS, Context API.' },
    { company: 'MAK { Byte } | Frontend Engineer', title: 'School Management System', description:'A web application built to manage school operations, including student records, grades, and schedules.', techstack: 'React, JavaScript, Sass, Bootstrap, HTML.' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];