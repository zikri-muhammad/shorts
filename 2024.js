// Skrip untuk Happy New Year 2024 YouTube Short

// Import library Node.js
const fs = require('fs');

// Fungsi untuk membuat ucapan selamat tahun baru
function createNewYearWish(name) {
    return `🎉 Selamat Tahun Baru ${name}! 🎊 Semoga tahun 2024 membawa kebahagiaan, sukses, dan petualangan baru untukmu. Terima kasih telah menjadi bagian dari perjalananku di tahun ini. Mari kita buat kenangan indah bersama di tahun yang baru! 🌟 #HappyNewYear #2024 #NewBeginnings`;
}

// Fungsi untuk membuat video YouTube Short
function createYouTubeShortScript(name) {
    const wishMessage = createNewYearWish(name);
    
    // Template string untuk video
    const videoScript = `
        [Intro]
        🌟🎆🎊 Selamat Tahun Baru 2024! 🎊🎆🌟
        
        [Scene 1]
        🎉 Sambut tahun baru dengan senyuman dan harapan baru!
        
        [Scene 2]
        🌈 Tahun 2023 memberi kita banyak pelajaran dan prestasi.
        
        [Scene 3]
        🥳 Bersiaplah untuk petualangan baru di tahun 2024!
        
        [Scene 4]
        🙌 ${wishMessage}
        
        [Outro]
        👋 Terima kasih telah menjadi bagian dari komunitas ini!
        🚀 Mari bersama-sama menjelajahi tahun yang baru!
        
        #HappyNewYear #2024 #NewBeginnings #YouTubeShorts
    `;

    // Simpan skrip ke dalam file
    const fileName = `HappyNewYear2024_${name}_ShortScript.txt`;
    fs.writeFileSync(fileName, videoScript);

    console.log(`Skrip untuk video YouTube Short telah berhasil dibuat: ${fileName}`);
}

// Gantilah 'YourName' dengan nama Anda atau nama yang ingin Anda sertakan dalam ucapan.
createYouTubeShortScript('YourName');
