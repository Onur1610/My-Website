import React, { useState, useEffect } from 'react';
import './App.css';
import profileImage from './profile-image.jpg';
import reactLogo from './react.png';
import javascriptLogo from './js.png';
import cssLogo from './css.png';
import htmlLogo from './html.png';
import githubLogo from './git.png';
import discordLogo from './discord.png';
import gmailLogo from './Gmail.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode === 'dark') {
      setIsDarkMode(true);
    }

    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: 'Bearer token',
          },
        });
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('preferredMode', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleDiscordClick = () => {
    window.open('https://discord.com/users/697414754481864824', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:onurdolcekofficial@gmail.com', '_blank');
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <nav className="Navigation">
        <ul>
          <li><a href="https://github.com/Onur1610">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/onur-d-2bb0b424a/">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/onurd_q">Instagram</a></li>
          <li><a href="https://twitter.com/OnurDolcek">Twitter</a></li>
        </ul>
        <button className={`DarkModeToggle ${isDarkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <div className="MainContent">
        <h1>Hoş Geldiniz!</h1>
        <div className="AboutMe">
          <div className="ProfileImageContainer">
            <img src={profileImage} alt="Profil Fotoğrafı" className="ProfileImage" />
          </div>
          <div className="AboutTextContainer">
            <h2 className="SectionTitle">Hakkımda</h2>
            <p className="AboutText">
              Merhaba! Benim adım Onur. Yazılıma olan tutkum ve merakım ile yaklaşık 2 yıldır bu alanda kendimi geliştiriyorum.
              Bu süre içinde React.js, JavaScript, CSS ve HTML üzerinde yoğunlaştım.
              Yazılım geliştirme sürecinde 2 yılı aşkın süredir çalışıyorum ve 
              Kullanıcı odaklı, estetik ve etkili çözümler üretmeyi amaçlayan bir yaklaşım benimsiyorum.
              Sizlere en iyi kullanıcı deneyimini sunabilmek için sürekli öğrenmeye devam ediyorum.
            </p>
          </div>
        </div>
        <div className={`LanguagesSection ${isDarkMode ? 'dark' : ''}`}>
          <h2 className="SectionTitle">Kullandığım Teknolojiler</h2>
          <div className="LanguagesCarousel">
            <div className="LanguageCard">
              <img src={reactLogo} alt="React Logo" className="LanguageLogo" />
              <h3>React.js</h3>
              <p>JavaScript tabanlı bir kütüphanedir.</p>
            </div>
            <div className="LanguageCard">
              <img src={javascriptLogo} alt="JavaScript Logo" className="LanguageLogo" />
              <h3>JavaScript</h3>
              <p>Web uygulamaları için bir programlama dilidir.</p>
            </div>
            <div className="LanguageCard">
              <img src={cssLogo} alt="CSS Logo" className="LanguageLogo" />
              <h3>CSS</h3>
              <p>Web sayfalarını stillemek için kullanılan bir dildir.</p>
            </div>
            <div className="LanguageCard">
              <img src={htmlLogo} alt="HTML Logo" className="LanguageLogo" />
              <h3>HTML</h3>
              <p>Web sayfalarının yapısal olarak oluşturulduğu bir dildir.</p>
            </div>
          </div>
        </div>
        <div className={`ProjectsSection ${isDarkMode ? 'dark' : ''}`}>
          <h2 className="SectionTitle">Projelerim</h2>
          <div className="ProjectContainer">
            {projects.map((project) => (
              <div className="ProjectCard" key={project.id}>
                <div className="ProjectCardContent">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="GitHubLink">
                    <img src={githubLogo} alt="GitHub Logo" className="GitHubLogo" />
                    GitHub'da Görüntüle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ContactSection">
          <h2 className="SectionTitle">İletişim</h2>
          <div className="ContactInfo">
          
              <span onClick={handleEmailClick}><img src={gmailLogo} alt="Gmail Logo" className="ContactLogo" /></span>
              <br />
              <p>onurdolcekofficial@gmail.com</p>
            
            
              <span onClick={handleDiscordClick}><img src={discordLogo} alt="Discord Logo" className="ContactLogo" /></span>
              <br />
              <p> Onur_#1610</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
