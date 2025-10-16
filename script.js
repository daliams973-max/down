// «··€«  «·„œ⁄Ê„…
const languages = {
    'en': { name: 'English', flag: '????', dir: 'ltr' },
    'ar': { name: '«·⁄—»Ì…', flag: '????', dir: 'rtl' },
    'ru': { name: '???????', flag: '????', dir: 'ltr' },
    'fr': { name: 'FranÁais', flag: '????', dir: 'ltr' },
    'es': { name: 'Espa?ol', flag: '????', dir: 'ltr' },
    'pt': { name: 'PortuguÍs', flag: '????', dir: 'ltr' },
    'hi': { name: '??????', flag: '????', dir: 'ltr' },
    'zh': { name: '??', flag: '????', dir: 'ltr' }
};

// «·‰’Ê’ «·„ —Ã„…
const translations = {
    'en': {
        logoText: 'VideoDownloader Pro',
        tagline: 'Download videos from any social media platform easily',
        urlPlaceholder: 'Paste video link here...',
        downloadText: 'Download',
        platformYoutube: 'YouTube',
        platformTiktok: 'TikTok',
        platformFacebook: 'Facebook',
        platformTwitter: 'Twitter',
        platformInstagram: 'Instagram',
        platformTelegram: 'Telegram',
        loadingText: 'Processing your request...',
        previewTitle: 'Video Preview',
        videoTitle: 'Video title will appear here',
        durationText: 'Duration',
        viewsText: 'Views',
        downloadVideoText: 'Download Video',
        downloadAudioText: 'Download Audio',
        footerText: 'VideoDownloader Pro © 2023 - All rights reserved',
        securityText: 'Safe & Secure Video Downloads',
        detectedText: "We've automatically detected your language",
        placeholderText: 'Video preview will appear here',
        feature1Title: 'Fast Download',
        feature1Desc: 'High-speed downloading',
        feature2Title: 'Safe & Secure',
        feature2Desc: 'No malware or viruses',
        feature3Title: 'Free Forever',
        feature3Desc: 'Unlimited free usage',
        feature4Title: 'Mobile Friendly',
        feature4Desc: 'Works on all devices',
        successDownload: 'Download started successfully!',
        successProcessing: 'Video processed successfully!',
        errorNoUrl: 'Please enter a video URL',
        errorInvalidUrl: 'Please enter a valid URL starting with http or https'
    },
    'ar': {
        logoText: '»—Ê  Õ„Ì· «·›ÌœÌÊÂ« ',
        tagline: 'Õ„¯· «·›ÌœÌÊÂ«  „‰ √Ì „‰’…  Ê«’· «Ã „«⁄Ì »”ÂÊ·…',
        urlPlaceholder: '«·’ﬁ —«»ÿ «·›ÌœÌÊ Â‰«...',
        downloadText: ' Õ„Ì·',
        platformYoutube: 'ÌÊ ÌÊ»',
        platformTiktok: ' Ìﬂ  Êﬂ',
        platformFacebook: '›Ì”»Êﬂ',
        platformTwitter: ' ÊÌ —',
        platformInstagram: '«‰” €—«„',
        platformTelegram: ' ·€—«„',
        loadingText: 'Ã«—Ì „⁄«·Ã… ÿ·»ﬂ...',
        previewTitle: '„⁄«Ì‰… «·›ÌœÌÊ',
        videoTitle: '⁄‰Ê«‰ «·›ÌœÌÊ ”ÌŸÂ— Â‰«',
        durationText: '«·„œ…',
        viewsText: '«·„‘«Âœ« ',
        downloadVideoText: ' Õ„Ì· «·›ÌœÌÊ',
        downloadAudioText: ' Õ„Ì· «·’Ê ',
        footerText: '»—Ê  Õ„Ì· «·›ÌœÌÊÂ«  © 2023 - Ã„Ì⁄ «·ÕﬁÊﬁ „Õ›ÊŸ…',
        securityText: ' Õ„Ì· ›ÌœÌÊÂ«  ¬„‰ Ê”—Ì⁄',
        detectedText: '·ﬁœ ﬁ„‰« »«ﬂ ‘«› ·€ ﬂ  ·ﬁ«∆Ì«',
        placeholderText: '„⁄«Ì‰… «·›ÌœÌÊ ” ŸÂ— Â‰«',
        feature1Title: ' Õ„Ì· ”—Ì⁄',
        feature1Desc: ' Õ„Ì· ⁄«·Ì «·”—⁄…',
        feature2Title: '¬„‰ Ê„÷„Ê‰',
        feature2Desc: '»œÊ‰ »—«„Ã ÷«—…',
        feature3Title: '„Ã«‰Ì ··√»œ',
        feature3Desc: '«” Œœ«„ „Ã«‰Ì €Ì— „ÕœÊœ',
        feature4Title: '„ Ê«›ﬁ „⁄ «·ÃÊ«·',
        feature4Desc: 'Ì⁄„· ⁄·Ï Ã„Ì⁄ «·√ÃÂ“…',
        successDownload: ' „ »œ¡ «· Õ„Ì· »‰Ã«Õ!',
        successProcessing: ' „ „⁄«·Ã… «·›ÌœÌÊ »‰Ã«Õ!',
        errorNoUrl: 'Ì—ÃÏ ≈œŒ«· —«»ÿ «·›ÌœÌÊ',
        errorInvalidUrl: 'Ì—ÃÏ ≈œŒ«· —«»ÿ ’ÕÌÕ Ì»œ√ »‹ http √Ê https'
    },
    'ru': {
        logoText: 'VideoDownloader Pro',
        tagline: '?????????? ????? ? ????? ?????????? ????????? ?????',
        urlPlaceholder: '???????? ?????? ?? ????? ?????...',
        downloadText: '???????',
        platformYoutube: 'YouTube',
        platformTiktok: 'TikTok',
        platformFacebook: 'Facebook',
        platformTwitter: 'Twitter',
        platformInstagram: 'Instagram',
        platformTelegram: 'Telegram',
        loadingText: '????????? ?????? ???????...',
        previewTitle: '???????????? ?????',
        videoTitle: '???????? ????? ???????? ?????',
        durationText: '????????????',
        viewsText: '?????????',
        downloadVideoText: '??????? ?????',
        downloadAudioText: '??????? ?????',
        footerText: 'VideoDownloader Pro © 2023 - ??? ????? ????????',
        securityText: '?????????? ???????? ?????',
        detectedText: '?? ????????????? ?????????? ??? ????',
        placeholderText: '???????????? ????? ???????? ?????',
        feature1Title: '??????? ????????',
        feature1Desc: '???????????????? ????????',
        feature2Title: '?????????',
        feature2Desc: '??? ??????? ? ??????????? ????????',
        feature3Title: '????????? ????????',
        feature3Desc: '?????????????? ?????????? ?????????????',
        feature4Title: '??? ?????????',
        feature4Desc: '???????? ?? ???? ???????????',
        successDownload: '???????? ???????? ???????!',
        successProcessing: '????? ?????????? ???????!',
        errorNoUrl: '??????????, ??????? ?????? ?? ?????',
        errorInvalidUrl: '??????????, ??????? ?????????????? ??????, ???????????? ? http ??? https'
    },
    'fr': {
        logoText: 'VideoDownloader Pro',
        tagline: 'TÈlÈchargez des vidÈos de n\'importe quelle plateforme sociale facilement',
        urlPlaceholder: 'Collez le lien vidÈo ici...',
        downloadText: 'TÈlÈcharger',
        platformYoutube: 'YouTube',
        platformTiktok: 'TikTok',
        platformFacebook: 'Facebook',
        platformTwitter: 'Twitter',
        platformInstagram: 'Instagram',
        platformTelegram: 'Telegram',
        loadingText: 'Traitement de votre demande...',
        previewTitle: 'AperÁu VidÈo',
        videoTitle: 'Le titre de la vidÈo apparaÓtra ici',
        durationText: 'DurÈe',
        viewsText: 'Vues',
        downloadVideoText: 'TÈlÈcharger la VidÈo',
        downloadAudioText: 'TÈlÈcharger l\'Audio',
        footerText: 'VideoDownloader Pro © 2023 - Tous droits rÈservÈs',
        securityText: 'TÈlÈchargements vidÈo sÈcurisÈs',
        detectedText: 'Nous avons automatiquement dÈtectÈ votre langue',
        placeholderText: 'L\'aperÁu vidÈo apparaÓtra ici',
        feature1Title: 'TÈlÈchargement Rapide',
        feature1Desc: 'TÈlÈchargement haute vitesse',
        feature2Title: 'SÈcurisÈ',
        feature2Desc: 'Aucun malware ou virus',
        feature3Title: 'Gratuit Pour Toujours',
        feature3Desc: 'Utilisation gratuite illimitÈe',
        feature4Title: 'Mobile Friendly',
        feature4Desc: 'Fonctionne sur tous les appareils',
        successDownload: 'TÈlÈchargement dÈmarrÈ avec succËs!',
        successProcessing: 'VidÈo traitÈe avec succËs!',
        errorNoUrl: 'Veuillez entrer un lien vidÈo',
        errorInvalidUrl: 'Veuillez entrer une URL valide commenÁant par http ou https'
    },
    'es': {
        logoText: 'VideoDownloader Pro',
        tagline: 'Descarga videos de cualquier plataforma social f?cilmente',
        urlPlaceholder: 'Pega el enlace del video aqu?...',
        downloadText: 'Descargar',
        platformYoutube: 'YouTube',
        platformTiktok: 'TikTok',
        platformFacebook: 'Facebook',
        platformTwitter: 'Twitter',
        platformInstagram: 'Instagram',
        platformTelegram: 'Telegram',
        loadingText: 'Procesando tu solicitud...',
        previewTitle: 'Vista Previa',
        videoTitle: 'El t?tulo del video aparecer? aqu?',
        durationText: 'Duraci?n',
        viewsText: 'Vistas',
        downloadVideoText: 'Descargar Video',
        downloadAudioText: 'Descargar Audio',
        footerText: 'VideoDownloader Pro © 2023 - Todos los derechos reservados',
        securityText: 'Descargas de video seguras',
        detectedText: 'Hemos detectado autom?ticamente tu idioma',
        placeholderText: 'La vista previa del video aparecer? aqu?',
        feature1Title: 'Descarga R?pida',
        feature1Desc: 'Descarga de alta velocidad',
        feature2Title: 'Seguro',
        feature2Desc: 'Sin malware ni virus',
        feature3Title: 'Gratis Para Siempre',
        feature3Desc: 'Uso gratuito ilimitado',
        feature4Title: 'Para M?viles',
        feature4Desc: 'Funciona en todos los dispositivos',
        successDownload: '?Descarga iniciada con Èxito!',
        successProcessing: '?Video procesado con Èxito!',
        errorNoUrl: 'Por favor ingresa un enlace de video',
        errorInvalidUrl: 'Por favor ingresa una URL v?lida que comience con http o https'
    },
    'pt': {
        logoText: 'VideoDownloader Pro',
        tagline: 'Baixe v?deos de qualquer plataforma social facilmente',
        urlPlaceholder: 'Cole o link do v?deo aqui...',
        downloadText: 'Baixar',
        platformYoutube: 'YouTube',
        platformTiktok: 'TikTok',
        platformFacebook: 'Facebook',
        platformTwitter: 'Twitter',
        platformInstagram: 'Instagram',
        platformTelegram: 'Telegram',
        loadingText: 'Processando sua solicitaÁ?o...',
        previewTitle: 'PrÈ-visualizaÁ?o',
        videoTitle: 'O t?tulo do v?deo aparecer? aqui',
        durationText: 'DuraÁ?o',
        viewsText: 'VisualizaÁ?es',
        downloadVideoText: 'Baixar V?deo',
        downloadAudioText: 'Baixar ?udio',
        footerText: 'VideoDownloader Pro © 2023 - Todos os direitos reservados',
        securityText: 'Downloads de v?deo seguros',
        detectedText: 'Detectamos automaticamente seu idioma',
        placeholderText: 'A prÈ-visualizaÁ?o do v?deo aparecer? aqui',
        feature1Title: 'Download R?pido',
        feature1Desc: 'Download de alta velocidade',
        feature2Title: 'Seguro',
        feature2Desc: 'Sem malware ou v?rus',
        feature3Title: 'Gr?tis Para Sempre',
        feature3Desc: 'Uso gratuito ilimitado',
        feature4Title: 'Para Celular',
        feature4Desc: 'Funciona em todos os dispositivos',
        successDownload: 'Download iniciado com sucesso!',
        successProcessing: 'V?deo processado com sucesso!',
        errorNoUrl: 'Por favor, insira um link de v?deo',
        errorInvalidUrl: 'Por favor, insira um URL v?lido comeÁando com http ou https'
    },
    'hi': {
        logoText: 'VideoDownloader Pro',
        tagline: '???? ?? ???? ?????? ?????????? ?? ?????? ????? ?? ??????? ????',
        urlPlaceholder: '?????? ???? ???? ????? ????...',
        downloadText: '???????',
        platformYoutube: 'YouTube',
        platformTiktok: 'TikTok',
        platformFacebook: 'Facebook',
        platformTwitter: 'Twitter',
        platformInstagram: 'Instagram',
        platformTelegram: 'Telegram',
        loadingText: '???? ?????? ??????? ???? ?? ??? ??...',
        previewTitle: '?????? ???????????',
        videoTitle: '?????? ?????? ???? ????? ????',
        durationText: '????',
        viewsText: '?????',
        downloadVideoText: '?????? ??????? ????',
        downloadAudioText: '????? ??????? ????',
        footerText: 'VideoDownloader Pro © 2023 - ?????????? ????????',
        securityText: '???????? ?????? ???????',
        detectedText: '???? ???? ???? ???????? ??? ?? ????? ?? ??',
        placeholderText: '?????? ??????????? ???? ????? ????',
        feature1Title: '??? ???????',
        feature1Desc: '???? ??? ???????',
        feature2Title: '????????',
        feature2Desc: '???? ??????? ?? ????? ??',
        feature3Title: '????? ?????',
        feature3Desc: '?????? ????? ?????',
        feature4Title: '?????? ?? ???',
        feature4Desc: '??? ??????? ?? ??? ???? ??',
        successDownload: '??????? ??????????? ???? ???!',
        successProcessing: '?????? ??????????? ???????!',
        errorNoUrl: '????? ?? ?????? ?????? ???? ????',
        errorInvalidUrl: '????? http ?? https ?? ???? ???? ???? ?? ????? ?????? ???? ????'
    },
    'zh': {
        logoText: '????????',
        tagline: '???????????????',
        urlPlaceholder: '????????...',
        downloadText: '??',
        platformYoutube: 'YouTube',
        platformTiktok: 'TikTok',
        platformFacebook: 'Facebook',
        platformTwitter: 'Twitter',
        platformInstagram: 'Instagram',
        platformTelegram: 'Telegram',
        loadingText: '????????...',
        previewTitle: '????',
        videoTitle: '??????????',
        durationText: '??',
        viewsText: '????',
        downloadVideoText: '????',
        downloadAudioText: '????',
        footerText: '???????? © 2023 - ??????',
        securityText: '??????',
        detectedText: '????????????',
        placeholderText: '??????????',
        feature1Title: '????',
        feature1Desc: '????',
        feature2Title: '??',
        feature2Desc: '????????',
        feature3Title: '????',
        feature3Desc: '??????',
        feature4Title: '????',
        feature4Desc: '???????',
        successDownload: '??????!',
        successProcessing: '??????!',
        errorNoUrl: '???????',
        errorInvalidUrl: '???? http ? https ???????'
    }
};

// «·ﬂ‘› ⁄‰ «··€…
function detectBrowserLanguage() {
    const browserLang = navigator.language.toLowerCase();
    
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('hi')) return 'hi';
    if (browserLang.startsWith('zh')) return 'zh';
    
    return 'en';
}

let currentLang = 'en';

// „‰’«  «·›ÌœÌÊ
const platformPatterns = {
    'youtube': /(youtube\.com|youtu\.be)/,
    'tiktok': /tiktok\.com/,
    'facebook': /(facebook\.com|fb\.watch)/,
    'twitter': /(twitter\.com|x\.com)/,
    'instagram': /instagram\.com/,
    'telegram': /(telegram\.org|t\.me)/
};

const platformIcons = {
    'youtube': 'fab fa-youtube',
    'tiktok': 'fab fa-tiktok',
    'facebook': 'fab fa-facebook',
    'twitter': 'fab fa-twitter',
    'instagram': 'fab fa-instagram',
    'telegram': 'fab fa-telegram',
    'default': 'fas fa-video'
};

document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        videoUrl: document.getElementById('videoUrl'),
        fetchBtn: document.getElementById('fetchBtn'),
        loading: document.getElementById('loading'),
        result: document.getElementById('result'),
        videoTitle: document.getElementById('videoTitle'),
        qualityOptions: document.getElementById('qualityOptions'),
        downloadVideo: document.getElementById('downloadVideo'),
        downloadAudio: document.getElementById('downloadAudio'),
        successMessage: document.getElementById('successMessage'),
        errorMessage: document.getElementById('errorMessage'),
        languageBtn: document.getElementById('languageBtn'),
        languageDropdown: document.getElementById('languageDropdown'),
        autoDetectedMessage: document.getElementById('autoDetectedMessage'),
        platformIcon: document.getElementById('platformIcon'),
        platformName: document.getElementById('platformName'),
        videoPlaceholder: document.getElementById('videoPlaceholder')
    };

    //  ÂÌ∆… ﬁ«∆„… «··€« 
    function initLanguageDropdown() {
        elements.languageDropdown.innerHTML = '';
        
        for (const [code, lang] of Object.entries(languages)) {
            const option = document.createElement('div');
            option.className = 'language-option';
            option.innerHTML = `
                <span class="language-flag">${lang.flag}</span>
                <span>${lang.name}</span>
            `;
            option.addEventListener('click', () => {
                setLanguage(code);
                elements.languageDropdown.classList.remove('show');
                elements.autoDetectedMessage.style.display = 'none';
            });
            elements.languageDropdown.appendChild(option);
        }
    }

    //  ⁄ÌÌ‰ «··€…
    function setLanguage(langCode) {
        currentLang = langCode;
        const langData = languages[langCode];
        const textData = translations[langCode];

        //  ÕœÌÀ Ã„Ì⁄ «·‰’Ê’
        Object.keys(textData).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = textData[key];
            }
        });

        //  ÕœÌÀ «·“— «·Õ«·Ì
        document.getElementById('currentFlag').textContent = langData.flag;
        document.getElementById('currentLanguage').textContent = langData.name;

        //  ÕœÌÀ « Ã«Â «·’›Õ…
        document.body.dir = langData.dir;
        document.documentElement.lang = langCode;
    }

    // ⁄—÷ —”«·…
    function showMessage(message, type) {
        if (type === 'success') {
            elements.successMessage.textContent = message;
            elements.successMessage.style.display = 'block';
            elements.errorMessage.style.display = 'none';
        } else {
            elements.errorMessage.textContent = message;
            elements.errorMessage.style.display = 'block';
            elements.successMessage.style.display = 'none';
        }
        
        setTimeout(() => {
            elements.successMessage.style.display = 'none';
            elements.errorMessage.style.display = 'none';
        }, 5000);
    }

    // ﬂ‘› «·„‰’… „‰ «·—«»ÿ
    function detectPlatform(url) {
        for (const [platform, pattern] of Object.entries(platformPatterns)) {
            if (pattern.test(url)) return platform;
        }
        return 'default';
    }

    // «·ﬂ‘› «· ·ﬁ«∆Ì ⁄‰ «··€…
    function autoDetectLanguage() {
        const detectedLang = detectBrowserLanguage();
        setLanguage(detectedLang);
        elements.autoDetectedMessage.style.display = 'block';
        
        setTimeout(() => {
            elements.autoDetectedMessage.style.display = 'none';
        }, 5000);
    }

    // «·Õ’Ê· ⁄·Ï —«»ÿ „À«·
    function getExampleUrl(platformName) {
        const examples = {
            'YouTube': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'TikTok': 'https://www.tiktok.com/@example/video/123456789',
            'Facebook': 'https://www.facebook.com/watch/?v=123456789',
            'Twitter': 'https://twitter.com/user/status/123456789',
            'Instagram': 'https://www.instagram.com/p/ABC123/',
            'Telegram': 'https://t.me/channel/123'
        };
        return examples[platformName] || 'https://example.com/video';
    }

    // „⁄«·Ã… «·›ÌœÌÊ
    function processVideo(url) {
        const platform = detectPlatform(url);
        const platformIconClass = platformIcons[platform] || platformIcons.default;
        
        //  ÕœÌÀ „⁄·Ê„«  «·„‰’…
        elements.platformIcon.className = platformIconClass;
        elements.platformName.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
        
        // ≈⁄œ«œ ŒÌ«—«  «·ÃÊœ…
        elements.qualityOptions.innerHTML = '';
        const qualities = ['1080p', '720p', '480p', '360p'];
        
        qualities.forEach((quality, index) => {
            const btn = document.createElement('button');
            btn.className = 'quality-btn' + (index === 1 ? ' active' : '');
            btn.textContent = quality;
            btn.addEventListener('click', function() {
                document.querySelectorAll('.quality-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
            elements.qualityOptions.appendChild(btn);
        });

        showMessage(translations[currentLang].successProcessing, 'success');
    }

    //  ÂÌ∆… «· ÿ»Ìﬁ
    function initApp() {
        initLanguageDropdown();
        autoDetectLanguage();

        // ≈÷«›… „” „⁄Ì «·√Õœ«À
        elements.languageBtn.addEventListener('click', () => {
            elements.languageDropdown.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!elements.languageBtn.contains(e.target)) {
                elements.languageDropdown.classList.remove('show');
            }
        });

        // „⁄«·Ã… «·—«»ÿ
        elements.fetchBtn.addEventListener('click', function() {
            const url = elements.videoUrl.value.trim();
            
            if (!url) {
                showMessage(translations[currentLang].errorNoUrl, 'error');
                return;
            }
            
            if (!url.startsWith('http')) {
                showMessage(translations[currentLang].errorInvalidUrl, 'error');
                return;
            }
            
            elements.loading.style.display = 'block';
            elements.result.style.display = 'none';
            
            setTimeout(function() {
                elements.loading.style.display = 'none';
                elements.result.style.display = 'block';
                
                elements.videoTitle.textContent = `${translations[currentLang].videoTitle} - ${new Date().toLocaleTimeString()}`;
                processVideo(url);
            }, 2000);
        });
        
        //  Õ„Ì· «·›ÌœÌÊ
        elements.downloadVideo.addEventListener('click', function() {
            const activeQuality = document.querySelector('.quality-btn.active');
            const quality = activeQuality ? activeQuality.textContent : '720p';
            showMessage(`${translations[currentLang].downloadVideoText} (${quality}) - ${translations[currentLang].successDownload}`, 'success');
        });
        
        //  Õ„Ì· «·’Ê 
        elements.downloadAudio.addEventListener('click', function() {
            showMessage(`${translations[currentLang].downloadAudioText} - ${translations[currentLang].successDownload}`, 'success');
        });
        
        // ≈÷«›… —Ê«»ÿ „À«·
        document.querySelectorAll('.platform').forEach(platform => {
            platform.addEventListener('click', function() {
                const platformName = this.querySelector('.platform-name').textContent;
                elements.videoUrl.value = getExampleUrl(platformName);
                showMessage(`${platformName} example link added`, 'success');
            });
        });

        // «·÷€ÿ ⁄·Ï Enter
        elements.videoUrl.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                elements.fetchBtn.click();
            }
        });
    }

    // »œ¡ «· ÿ»Ìﬁ
    initApp();
});