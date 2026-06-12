(() => {
    const SAVE_KEY = "sakuDongeng.v1";
    const NAME_KEY = "sakuDongeng.playerName";
    const app = document.getElementById("app");

    // ===== DATA CERITA ORIGINAL (VERSI 1) =====
    const stories = [
      {
        id: "bawang", title: "Bawang Merah dan Bawang Putih", hero: "Bawang Putih", icon: "🎃", place: "village", colors: ["#ffb6c9", "#ffe17b"], item: "labu kecil",
        intro: [
          "Bawang Putih adalah anak yang rajin dan baik hati. Ia tinggal bersama ibu tiri dan Bawang Merah yang sering menyuruhnya bekerja.",
          "Suatu pagi, Bawang Putih mencuci kain di sungai. Angin kecil membawa satu kain hanyut menjauh.",
          "Bawang Putih mengikuti aliran sungai sampai bertemu seorang nenek baik hati di sebuah rumah sederhana."
        ],
        choice1: {
          prompt: "Apa yang sebaiknya dilakukan Bawang Putih saat kainnya hanyut?",
          options: [
            { text: "Menyalahkan orang lain", points: 0, wisdom: -1, reply: "Bawang Putih mengeluh. Ia menjadi makin bingung dan kain tetap belum ditemukan." },
            { text: "Mencari dengan sabar", points: 15, wisdom: 2, reply: "Bawang Putih berjalan pelan mengikuti sungai. Kesabarannya membawanya ke rumah nenek." },
            { text: "Pulang tanpa berusaha", points: 5, wisdom: 0, reply: "Bawang Putih pulang sebentar, tetapi hatinya gelisah karena masalah belum selesai." }
          ]
        },
        bridge1: "Nenek meminta bantuan Bawang Putih membersihkan rumah. Bawang Putih ingat bahwa menolong orang lain adalah perbuatan baik.",
        miniQuiz: { question: "Bawang Putih menemukan 3 labu kecil dan 2 labu besar. Berapa jumlah seluruh labu?", options: ["4", "5", "6"], correct: 1, praise: "Benar! 3 + 2 = 5 labu. Kamu teliti seperti Bawang Putih." },
        choice2: {
          prompt: "Nenek menawarkan hadiah karena Bawang Putih rajin membantu. Pilih sikap terbaik.",
          options: [
            { text: "Meminta semua hadiah", points: 0, wisdom: -1, reply: "Bawang Putih mulai lupa diri. Hadiah terasa banyak, tetapi hatinya tidak tenang." },
            { text: "Berterima kasih dan memilih secukupnya", points: 15, wisdom: 2, reply: "Bawang Putih tersenyum dan memilih dengan rendah hati. Nenek ikut bahagia." },
            { text: "Menolak tanpa pamit", points: 5, wisdom: 0, reply: "Bawang Putih pergi cepat-cepat. Ia aman, tetapi lupa mengucapkan terima kasih." }
          ]
        },
        logicQuiz: { question: "Urutan yang tepat adalah...", options: ["Menolong nenek, lalu berterima kasih", "Marah dulu, lalu menolong", "Memilih hadiah sebelum membantu"], correct: 0, praise: "Tepat! Menolong dulu, lalu berterima kasih adalah urutan sikap yang baik." },
        storyQuiz: { question: "Menurut cerita asli, labu mana yang dipilih Bawang Putih?", options: ["Besar", "Sedang", "Kecil"], correct: 2, praise: "Hebat! Bawang Putih memilih labu kecil karena ia rendah hati." },
        finalChoice: {
          prompt: "Di rumah, Bawang Merah ingin tahu rahasia labu itu. Apa yang paling bijaksana?",
          options: [
            { text: "Membalas dengan ejekan", points: 0, wisdom: -1, reply: "Ejekan membuat suasana rumah makin panas." },
            { text: "Bercerita jujur tanpa sombong", points: 15, wisdom: 2, reply: "Kejujuran Bawang Putih membuat pesan kebaikan terdengar jelas." },
            { text: "Menyembunyikan semuanya", points: 5, wisdom: 0, reply: "Bawang Putih aman, tetapi keluarganya tidak belajar dari kejadian itu." }
          ]
        },
        preEnding: "Labu kecil itu dibuka. Di dalamnya ada kejutan yang menunjukkan bahwa kebaikan sering datang kepada orang yang sabar.",
        endings: {
          good: { title: "Ending Baik: Kebaikan Berbuah Manis", text: "Bawang Putih tetap sabar, jujur, dan rendah hati. Keluarganya mulai belajar menghargai kerja keras.", moral: "Pesan moral: Kesabaran, kejujuran, dan rendah hati membuat hidup lebih damai." },
          neutral: { title: "Ending Netral: Belajar Sedikit demi Sedikit", text: "Bawang Putih kadang ragu, tetapi ia masih mau memperbaiki sikapnya. Hari esok bisa lebih baik.", moral: "Pesan moral: Jika belum sempurna, teruslah belajar memilih yang baik." },
          bad: { title: "Ending Buruk: Hati Menjadi Berat", text: "Bawang Putih memilih membalas dan lupa bersyukur. Hadiah tidak terasa menyenangkan karena hatinya tidak tenang.", moral: "Pesan moral: Membalas keburukan dengan keburukan tidak menyelesaikan masalah." }
        }
      },
      {
        id: "malin", title: "Malin Kundang", hero: "Malin", icon: "⛵", place: "sea", colors: ["#76d9ff", "#b2f0a8"], item: "perahu",
        intro: [
          "Malin tinggal bersama ibunya di pesisir pantai. Ibunya bekerja keras agar Malin bisa makan dan belajar.",
          "Saat dewasa, Malin ingin merantau naik kapal. Ibu memeluknya dan berpesan agar ia tidak lupa pulang.",
          "Bertahun-tahun kemudian, Malin menjadi saudagar kaya. Kapalnya besar dan penuh barang dagangan."
        ],
        choice1: {
          prompt: "Sebelum berangkat merantau, apa sikap terbaik Malin?",
          options: [
            { text: "Pergi diam-diam", points: 0, wisdom: -1, reply: "Malin pergi tanpa pamit. Hati ibu menjadi sedih dan cemas." },
            { text: "Meminta doa ibu", points: 15, wisdom: 2, reply: "Malin berpamitan dengan sopan. Doa ibu menjadi bekal keberanian." },
            { text: "Berjanji palsu agar cepat pergi", points: 5, wisdom: 0, reply: "Malin berangkat cepat, tetapi janji yang tidak sungguh-sungguh mudah dilupakan." }
          ]
        },
        bridge1: "Kapal Malin membawa banyak barang. Ia harus menghitung bekal agar perjalanan aman.",
        miniQuiz: { question: "Di kapal ada 2 karung beras dan 3 keranjang ikan. Berapa semua bekal itu?", options: ["4", "5", "6"], correct: 1, praise: "Benar! 2 + 3 = 5 bekal. Perjalanan jadi lebih siap." },
        choice2: {
          prompt: "Saat kembali ke kampung, Malin melihat ibunya memanggil dari tepi pantai. Apa yang sebaiknya ia lakukan?",
          options: [
            { text: "Mengakui dan memeluk ibu", points: 15, wisdom: 2, reply: "Ibu tersenyum haru. Malin ingat asal-usul dan kasih sayang keluarga." },
            { text: "Pura-pura tidak kenal", points: 0, wisdom: -2, reply: "Hati ibu hancur karena Malin malu mengakui dirinya." },
            { text: "Menyuruh pelayan memberi uang saja", points: 5, wisdom: 0, reply: "Bantuan uang tidak cukup, karena ibu paling rindu kasih sayang anaknya." }
          ]
        },
        logicQuiz: { question: "Mana kalimat yang menunjukkan sikap hormat kepada orang tua?", options: ["Aku malu punya ibu miskin.", "Terima kasih, Ibu, atas doamu.", "Jangan panggil aku lagi."], correct: 1, praise: "Tepat! Ucapan terima kasih adalah tanda hormat dan sayang." },
        storyQuiz: { question: "Dalam cerita asli, apa akibat Malin durhaka kepada ibunya?", options: ["Menjadi batu", "Menjadi raja", "Menjadi burung"], correct: 0, praise: "Benar! Cerita Malin Kundang mengingatkan kita untuk menghormati orang tua." },
        finalChoice: {
          prompt: "Badai mulai datang. Apa keputusan terbaik Malin?",
          options: [
            { text: "Minta maaf kepada ibu", points: 15, wisdom: 2, reply: "Kata maaf membuat hati lebih ringan meski badai masih bergemuruh." },
            { text: "Menyalahkan awak kapal", points: 0, wisdom: -1, reply: "Menyalahkan orang lain tidak menghentikan badai." },
            { text: "Diam saja karena malu", points: 5, wisdom: 0, reply: "Diam membuat masalah belum selesai, tetapi Malin mulai menyesal." }
          ]
        },
        preEnding: "Ombak tinggi menggoyang kapal. Malin harus memilih antara kesombongan dan permintaan maaf yang tulus.",
        endings: {
          good: { title: "Ending Baik: Pulang dengan Rendah Hati", text: "Malin meminta maaf, merawat ibunya, dan memakai kekayaannya untuk membantu kampung nelayan.", moral: "Pesan moral: Jangan lupa keluarga dan hormatilah orang tua." },
          neutral: { title: "Ending Netral: Penyesalan di Pantai", text: "Malin menyesal, tetapi ia terlambat mengucapkan banyak hal. Ia berjanji akan memperbaiki diri.", moral: "Pesan moral: Jangan menunggu terlalu lama untuk meminta maaf." },
          bad: { title: "Ending Buruk: Hati Sekeras Batu", text: "Malin tetap sombong dan menyakiti ibunya. Badai menjadi pelajaran yang sangat pahit baginya.", moral: "Pesan moral: Kesombongan dapat membuat kita kehilangan kasih sayang." }
        }
      },
      {
        id: "timun", title: "Timun Mas", hero: "Timun Mas", icon: "🥒", place: "forest", colors: ["#8de36d", "#ffe477"], item: "biji mentimun",
        intro: [
          "Timun Mas tumbuh menjadi anak pemberani. Ia tinggal bersama Mbok Rondo yang sangat menyayanginya.",
          "Suatu hari, raksasa datang menagih janji lama. Timun Mas harus berlari menyelamatkan diri.",
          "Mbok Rondo memberi empat benda ajaib: biji mentimun, jarum, garam, dan terasi."
        ],
        choice1: {
          prompt: "Saat raksasa mendekat, apa yang sebaiknya dilakukan Timun Mas?",
          options: [
            { text: "Panik dan membuang semua benda", points: 0, wisdom: -1, reply: "Benda ajaib tercecer. Timun Mas menjadi kesulitan mengatur rencana." },
            { text: "Berlari sambil ingat pesan ibu", points: 15, wisdom: 2, reply: "Timun Mas berlari teratur dan mengingat kegunaan tiap benda ajaib." },
            { text: "Bersembunyi tanpa rencana", points: 5, wisdom: 0, reply: "Ia sempat aman, tetapi raksasa masih bisa mencari jejaknya." }
          ]
        },
        bridge1: "Di dalam kantong, Timun Mas menghitung benda ajaib agar tidak salah menggunakannya.",
        miniQuiz: { question: "Timun Mas membawa 4 biji mentimun dan 3 butir garam ajaib. Berapa benda ajaib yang dihitungnya?", options: ["6", "7", "8"], correct: 1, praise: "Benar! 4 + 3 = 7. Menghitung membantu Timun Mas tetap tenang." },
        choice2: {
          prompt: "Raksasa hampir menangkap Timun Mas. Benda mana yang cocok untuk membuat hutan penghalang?",
          options: [
            { text: "Biji mentimun", points: 15, wisdom: 2, reply: "Biji berubah menjadi ladang mentimun lebat yang memperlambat raksasa." },
            { text: "Sepatu", points: 0, wisdom: -1, reply: "Sepatu bukan benda ajaib dari Mbok Rondo, jadi raksasa tetap mendekat." },
            { text: "Daun biasa", points: 5, wisdom: 0, reply: "Daun membuat raksasa bingung sebentar, tetapi tidak cukup kuat." }
          ]
        },
        logicQuiz: { question: "Jika ingin menyeberang tempat licin, benda ajaib apa yang paling cocok menjadi lumpur atau laut?", options: ["Garam", "Kelereng", "Pensil"], correct: 0, praise: "Tepat! Dalam cerita, garam dapat berubah menjadi laut yang menghalangi raksasa." },
        storyQuiz: { question: "Siapa yang memberi benda ajaib kepada Timun Mas?", options: ["Mbok Rondo", "Malin", "Bawang Merah"], correct: 0, praise: "Hebat! Mbok Rondo menolong Timun Mas dengan bekal ajaib." },
        finalChoice: {
          prompt: "Timun Mas punya satu benda terakhir. Bagaimana cara menggunakannya?",
          options: [
            { text: "Menggunakan saat raksasa tepat mendekat", points: 15, wisdom: 2, reply: "Timun Mas menunggu saat yang tepat. Rencananya berhasil." },
            { text: "Membuang jauh-jauh karena takut", points: 0, wisdom: -1, reply: "Tanpa benda terakhir, Timun Mas harus berlari lebih keras." },
            { text: "Memakai sembarangan", points: 5, wisdom: 0, reply: "Benda ajaib membantu sedikit, tetapi tidak sekuat jika dipakai tepat waktu." }
          ]
        },
        preEnding: "Raksasa mengaum keras. Timun Mas menarik napas dan mengingat bahwa keberanian perlu ditemani rencana.",
        endings: {
          good: { title: "Ending Baik: Berani dan Cerdik", text: "Timun Mas menggunakan benda ajaib dengan tepat. Ia pulang selamat dan memeluk Mbok Rondo.", moral: "Pesan moral: Berani, tenang, dan berpikir cerdik membantu kita menghadapi bahaya." },
          neutral: { title: "Ending Netral: Selamat dengan Banyak Pelajaran", text: "Timun Mas berhasil lolos, tetapi beberapa pilihan membuatnya hampir tertangkap. Ia belajar lebih teliti.", moral: "Pesan moral: Rencana yang baik membuat keberanian menjadi lebih kuat." },
          bad: { title: "Ending Buruk: Rencana yang Terlupa", text: "Timun Mas panik dan salah memakai bekal. Ia harus meminta bantuan hutan untuk mencari jalan pulang.", moral: "Pesan moral: Panik membuat kita sulit memakai pengetahuan yang sudah dimiliki." }
        }
      },
      {
        id: "sangkuriang", title: "Sangkuriang", hero: "Sangkuriang", icon: "⛰️", place: "mountain", colors: ["#b28cff", "#8fe3ff"], item: "perahu besar",
        intro: [
          "Sangkuriang adalah pemuda kuat dari tanah Sunda. Ia bertemu Dayang Sumbi tanpa mengetahui rahasia masa lalu.",
          "Dayang Sumbi memberi syarat yang sangat sulit: membuat perahu besar dan danau sebelum matahari terbit.",
          "Sangkuriang memanggil banyak bantuan. Malam menjadi sibuk dengan suara kayu dan air."
        ],
        choice1: {
          prompt: "Saat mendapat tugas sulit, apa sikap terbaik Sangkuriang?",
          options: [
            { text: "Bertanya baik-baik tentang alasannya", points: 15, wisdom: 2, reply: "Sangkuriang belajar bahwa bertanya dengan sopan dapat membuka pemahaman." },
            { text: "Marah dan memaksa", points: 0, wisdom: -1, reply: "Kemarahan membuat masalah menjadi semakin rumit." },
            { text: "Mengerjakan tanpa berpikir", points: 5, wisdom: 0, reply: "Ia bekerja keras, tetapi belum memahami alasan di balik tugas itu." }
          ]
        },
        bridge1: "Sangkuriang mengumpulkan alat. Ia perlu menghitung agar pekerjaannya rapi.",
        miniQuiz: { question: "Ada 6 batang kayu dan 2 lentera di tepi danau. Berapa jumlah semuanya?", options: ["7", "8", "9"], correct: 1, praise: "Benar! 6 + 2 = 8. Perhitungan rapi membantu pekerjaan besar." },
        choice2: {
          prompt: "Dayang Sumbi membuat fajar terlihat lebih cepat. Apa yang sebaiknya Sangkuriang lakukan?",
          options: [
            { text: "Menerima dengan tenang", points: 15, wisdom: 2, reply: "Sangkuriang kecewa, tetapi ia mencoba memahami dan menahan amarah." },
            { text: "Menendang perahu karena marah", points: 0, wisdom: -2, reply: "Perahu terbalik. Kemarahan meninggalkan akibat besar." },
            { text: "Diam dan pergi tanpa bicara", points: 5, wisdom: 0, reply: "Ia menghindar, tetapi masalah belum benar-benar selesai." }
          ]
        },
        logicQuiz: { question: "Jika ada tugas besar, mana rencana yang paling masuk akal?", options: ["Membagi pekerjaan kecil-kecil", "Menunda sampai lupa", "Merusak alat kerja"], correct: 0, praise: "Tepat! Tugas besar lebih mudah bila dibagi menjadi langkah kecil." },
        storyQuiz: { question: "Legenda Sangkuriang sering dikaitkan dengan terbentuknya gunung apa?", options: ["Tangkuban Perahu", "Semeru", "Rinjani"], correct: 0, praise: "Benar! Perahu yang terbalik dikaitkan dengan Gunung Tangkuban Perahu." },
        finalChoice: {
          prompt: "Sangkuriang merasa kecewa. Apa pilihan paling bijaksana?",
          options: [
            { text: "Menenangkan diri dan mendengar nasihat", points: 15, wisdom: 2, reply: "Ia belajar bahwa hati yang tenang bisa menerima kebenaran." },
            { text: "Melampiaskan amarah", points: 0, wisdom: -1, reply: "Amarah membuat benda di sekelilingnya rusak." },
            { text: "Menutup telinga", points: 5, wisdom: 0, reply: "Ia tidak marah besar, tetapi belum mau memahami nasihat." }
          ]
        },
        preEnding: "Langit mulai terang. Di antara gunung dan danau, Sangkuriang harus memilih cara menghadapi kekecewaan.",
        endings: {
          good: { title: "Ending Baik: Kuat karena Mampu Menahan Diri", text: "Sangkuriang menerima nasihat. Ia memakai kekuatannya untuk menjaga alam dan membantu warga.", moral: "Pesan moral: Kekuatan sejati terlihat saat kita mampu mengendalikan amarah." },
          neutral: { title: "Ending Netral: Gunung Pengingat", text: "Sangkuriang pergi dengan hati campur aduk. Ia mengingat bahwa keputusan tergesa-gesa bisa membawa akibat.", moral: "Pesan moral: Saat kecewa, berhentilah sejenak sebelum bertindak." },
          bad: { title: "Ending Buruk: Perahu Terbalik", text: "Sangkuriang marah dan menendang perahu. Jejak amarahnya menjadi pengingat bagi banyak orang.", moral: "Pesan moral: Marah tanpa kendali dapat merusak hasil kerja keras." }
        }
      },
      {
        id: "keong", title: "Keong Mas", hero: "Candra Kirana", icon: "🐚", place: "palace", colors: ["#ffd65a", "#ffa7e7"], item: "keong emas",
        intro: [
          "Di sebuah kerajaan, Putri Candra Kirana dikenal lembut dan suka menolong. Namun ada orang iri yang membuatnya terkena sihir.",
          "Sang putri berubah menjadi keong emas dan hanyut sampai ditemukan seorang nenek di tepi sungai.",
          "Setiap hari, rumah nenek menjadi rapi dan makanan tersedia. Nenek heran siapa yang menolongnya."
        ],
        choice1: {
          prompt: "Saat menjadi keong emas, apa sikap terbaik Candra Kirana?",
          options: [
            { text: "Tetap menolong diam-diam", points: 15, wisdom: 2, reply: "Keong Mas membantu nenek dengan tulus meski belum bisa menjelaskan siapa dirinya." },
            { text: "Membuat rumah berantakan", points: 0, wisdom: -1, reply: "Nenek menjadi sedih dan bingung. Sihir terasa makin berat." },
            { text: "Hanya bersembunyi terus", points: 5, wisdom: 0, reply: "Keong Mas aman, tetapi nenek tidak mendapat bantuan." }
          ]
        },
        bridge1: "Nenek menghias meja sederhana dengan bunga dan daun sebagai tanda syukur.",
        miniQuiz: { question: "Nenek menaruh 5 bunga dan 4 daun di meja. Berapa hiasan semuanya?", options: ["8", "9", "10"], correct: 1, praise: "Benar! 5 + 4 = 9 hiasan. Meja nenek jadi indah." },
        choice2: {
          prompt: "Nenek ingin tahu siapa penolongnya. Apa yang sebaiknya dilakukan Keong Mas?",
          options: [
            { text: "Mencari waktu aman untuk menjelaskan", points: 15, wisdom: 2, reply: "Keong Mas menunggu saat tepat agar nenek tidak terkejut." },
            { text: "Marah karena ditanya", points: 0, wisdom: -1, reply: "Nenek hanya ingin memahami. Marah membuat suasana tidak nyaman." },
            { text: "Pergi tanpa pesan", points: 5, wisdom: 0, reply: "Nenek kehilangan penolong dan tidak tahu apa yang terjadi." }
          ]
        },
        logicQuiz: { question: "Apa arti kata 'tulus' dalam cerita ini?", options: ["Menolong tanpa mengharap hadiah", "Menolong agar dipuji", "Menolong sambil mengejek"], correct: 0, praise: "Tepat! Tulus berarti berbuat baik dengan hati ikhlas." },
        storyQuiz: { question: "Dalam cerita Keong Mas, wujud ajaib sang putri adalah...", options: ["Keong emas", "Burung merak", "Ikan perak"], correct: 0, praise: "Benar! Sang putri berubah menjadi keong emas." },
        finalChoice: {
          prompt: "Saat kesempatan kembali ke istana datang, apa pilihan bijaksana Candra Kirana?",
          options: [
            { text: "Berterima kasih kepada nenek", points: 15, wisdom: 2, reply: "Ia tidak lupa jasa nenek yang telah merawatnya." },
            { text: "Pergi tanpa pamit", points: 0, wisdom: -1, reply: "Nenek menjadi sedih karena tidak tahu kabar Keong Mas." },
            { text: "Membawa semua barang nenek", points: 0, wisdom: -2, reply: "Itu bukan sikap baik. Barang nenek harus dihormati." }
          ]
        },
        preEnding: "Cahaya keemasan muncul di dekat sungai. Sihir hampir hilang, tetapi pilihan hati tetap menentukan akhir cerita.",
        endings: {
          good: { title: "Ending Baik: Cahaya Terima Kasih", text: "Candra Kirana kembali menjadi putri dan mengajak nenek tinggal nyaman di istana. Kebaikan dibalas dengan kebaikan.", moral: "Pesan moral: Berbuat tulus dan berterima kasih membuat persahabatan tumbuh." },
          neutral: { title: "Ending Netral: Pulang dengan Janji", text: "Candra Kirana pulang, tetapi ia hampir lupa berpamitan. Ia berjanji akan mengunjungi nenek lagi.", moral: "Pesan moral: Jangan lupa orang yang menolong kita." },
          bad: { title: "Ending Buruk: Kilau yang Meredup", text: "Keong Mas lupa bersyukur dan pergi tergesa-gesa. Cahaya emasnya meredup sampai ia belajar meminta maaf.", moral: "Pesan moral: Kebaikan harus dibalas dengan hormat, bukan dilupakan." }
        }
      }
    ];

    const stepTypes = [
      "intro0", "intro1", "intro2", "choice1", "choice1Result", "bridge1", "miniQuiz",
      "choice2", "choice2Result", "logicQuiz", "bridge2", "storyQuiz", "finalChoice",
      "finalResult", "preEnding", "ending"
    ];

    let save = loadSave();
    let session = null;
    let soundOn = save.soundOn !== false;
    let playerName = localStorage.getItem(NAME_KEY) || "";
    let audio = null;
    let musicTimer = null;

    function loadSave() {
      try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (raw) return { ...defaultSave(), ...JSON.parse(raw) };
      } catch (err) {}
      return defaultSave();
    }

    function defaultSave() {
      return { reading: 0, quiz: 0, decision: 0, completed: [], storyBest: {}, evaluations: [], records: [], soundOn: true };
    }

    function persist() {
      try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (err) {}
    }

    function esc(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }

    function currentTotals(includeSession = true) {
      const totals = { reading: save.reading, quiz: save.quiz, decision: save.decision };
      if (includeSession && session && !session.saved) {
        totals.reading += session.scores.reading; totals.quiz += session.scores.quiz; totals.decision += session.scores.decision;
      }
      totals.total = totals.reading + totals.quiz + totals.decision;
      return totals;
    }

    function getBadges(totals = currentTotals()) {
      const completedCount = new Set(save.completed).size + (session && !session.saved && session.endingReached ? 1 : 0);
      return [
        { id: "reader", name: "📚 Pembaca Hebat", unlocked: totals.reading >= 34 || (session && session.pagesRead >= 10) },
        { id: "explorer", name: "🧭 Penjelajah Cerita", unlocked: completedCount >= 2 || totals.decision >= 45 },
        { id: "expert", name: "🏆 Ahli Dongeng", unlocked: totals.quiz >= 60 || completedCount >= 4 || totals.total >= 180 }
      ];
    }

    // Navigasi Topbar Baru disuntikkan ke dalam kerangka aplikasi (shell)
    function shell(content) {
      const totals = currentTotals();
      const displayName = playerName || "Anonim";
      return `
        <div class="game">
          <div class="shell">
            <div class="topbar-nav">
              <div>👧 <b>${esc(displayName)}</b></div>
              <div style="display:flex; gap:8px;">
                <button class="small-btn" data-action="menu">Beranda</button>
                <button class="small-btn" data-action="admin" style="background: linear-gradient(180deg, #8d73f6, #694bcf); color: white;">Dashboard Guru</button>
              </div>
            </div>
            <div class="topbar" aria-label="Papan skor">
              <div class="score-pill"><span class="icon">📖</span><span><b>Membaca</b><strong>${totals.reading}</strong></span></div>
              <div class="score-pill"><span class="icon">✅</span><span><b>Kuis</b><strong>${totals.quiz}</strong></span></div>
              <div class="score-pill"><span class="icon">💎</span><span><b>Pilihan</b><strong>${totals.decision}</strong></span></div>
              <button class="sound-btn" data-action="toggle-sound" aria-label="${soundOn ? "Matikan suara" : "Hidupkan suara"}">${soundOn ? "🔊" : "🔇"}</button>
            </div>
            <section class="panel">${content}</section>
          </div>
        </div>
      `;
    }

    function renderStart() {
      app.innerHTML = `
        <div class="game">
          <section class="start-overlay">
            <div class="start-card">
              <div class="book-icon" aria-hidden="true">📖✨</div>
              <h1 class="hero-title">Saku Dongeng Nusantara</h1>
              <p class="subtitle">Baca cerita rakyat, pilih tindakan bijaksana, jawab kuis, dan temukan ending berbeda.</p>
              <div class="action-row"><button class="primary" data-action="open-menu">Mulai Bermain</button></div>
            </div>
          </section>
        </div>
      `;
    }

    function renderMenu() {
      const badges = getBadges().map((badge) => `<span class="badge ${badge.unlocked ? "unlocked" : ""}">${badge.name}</span>`).join("");
      const cards = stories.map((story) => {
        const done = save.completed.includes(story.id);
        return `
          <button class="story-card ${done ? "done" : ""}" style="--c1:${story.colors[0]};--c2:${story.colors[1]}" data-action="start-story" data-story="${story.id}">
            <span class="big-icon">${story.icon}</span>
            <h3>${esc(story.title)}</h3>
            <p>${done ? "Main lagi untuk ending lain" : "Ketuk untuk membaca"}</p>
          </button>
        `;
      }).join("");

      app.innerHTML = shell(`
        <div class="screen center-screen menu">
          <div>
            <h1 class="hero-title">Pilih Cerita</h1>
            <p class="subtitle">Setiap cerita memiliki pilihan, kuis, dan kemungkinan ending yang berbeda.</p>
            
            <div class="name-input-row">
                <input type="text" id="playerNameInput" class="name-input" placeholder="Siapa namamu?" value="${esc(playerName)}" maxlength="20">
                <button class="primary" data-action="save-name">Simpan Nama</button>
            </div>

            <div class="badge-row">${badges}</div>
            <div class="menu-grid">${cards}</div>
          </div>
        </div>
      `);
    }

    function startStory(storyId) {
      const story = stories.find((item) => item.id === storyId) || stories[0];
      session = {
        story, step: 0, scores: { reading: 0, quiz: 0, decision: 0 },
        wisdom: 0, pagesRead: 0, choices: {}, quizCorrect: {},
        feedback: "", feedbackType: "", saved: false, endingReached: false, endingType: null
      };
      playButton();
      renderPlay();
    }

    function renderPlay() {
      if (!session) return renderMenu();
      const story = session.story;
      const type = stepTypes[session.step];
      if (type === "ending") return renderEnding();

      let dialogue = ""; let speaker = story.hero; let choiceTitle = ""; let choices = ""; let artMood = type.includes("Quiz") ? "quiz" : "calm";

      if (type.startsWith("intro")) {
        dialogue = story.intro[Number(type.replace("intro", ""))]; choiceTitle = "Baca halaman ini, lalu lanjut."; choices = `<button class="primary" data-action="next-story">Lanjut</button>`;
      } else if (type === "bridge1") {
        dialogue = story.bridge1; speaker = "Narator"; choiceTitle = "Kamu mendapat +2 skor membaca saat melanjutkan."; choices = `<button class="primary" data-action="next-story">Lanjut</button>`;
      } else if (type === "bridge2") {
        dialogue = "Cerita makin seru. Setiap jawaban dan keputusan membantumu memahami pesan dongeng."; speaker = "Narator"; choiceTitle = "Lanjut ke kuis berbasis cerita."; choices = `<button class="primary" data-action="next-story">Lanjut</button>`;
      } else if (type === "preEnding") {
        dialogue = story.preEnding; speaker = "Narator"; choiceTitle = "Lihat ending pilihanmu."; choices = `<button class="primary green" data-action="next-story">Lihat Ending</button>`;
      } else if (type === "choice1" || type === "choice2" || type === "finalChoice") {
        const choiceData = story[type]; dialogue = choiceData.prompt; speaker = "Pilihan"; artMood = "choice"; choiceTitle = "Pilih satu tindakan.";
        choices = choiceData.options.map((option, index) => `<button class="choice-btn" data-action="choose" data-choice-key="${type}" data-index="${index}">${String.fromCharCode(65 + index)}. ${esc(option.text)}</button>`).join("");
      } else if (type === "choice1Result" || type === "choice2Result" || type === "finalResult") {
        const key = type === "choice1Result" ? "choice1" : type === "choice2Result" ? "choice2" : "finalChoice";
        const picked = session.choices[key]; dialogue = picked ? picked.reply : "Pilihanmu membuat cerita bergerak."; speaker = "Akibat Pilihan"; choiceTitle = "Setiap tindakan punya akibat."; choices = `<button class="primary" data-action="next-story">Lanjut</button>`;
      } else if (type === "miniQuiz" || type === "logicQuiz" || type === "storyQuiz") {
        const quiz = story[type]; const solved = session.quizCorrect[type]; speaker = type === "miniQuiz" ? "Mini Quiz" : type === "logicQuiz" ? "Kuis Logika" : "Kuis Cerita"; dialogue = quiz.question; choiceTitle = solved ? quiz.praise : "Pilih jawaban yang benar.";
        choices = quiz.options.map((option, index) => `<button class="choice-btn ${solved && index === quiz.correct ? "correct" : ""}" data-action="answer-quiz" data-quiz-key="${type}" data-index="${index}" ${solved ? "disabled" : ""}>${String.fromCharCode(65 + index)}. ${esc(option)}</button>`).join("");
        if (solved) choices += `<button class="primary green" data-action="next-story">Lanjut</button>`;
      }

      const feedback = session.feedback ? `<div class="feedback ${session.feedbackType}">${esc(session.feedback)}</div>` : `<div class="feedback"></div>`;
      const dots = stepTypes.map((_, index) => `<span class="dot ${index <= session.step ? "on" : ""}"></span>`).join("");

      app.innerHTML = shell(`
        <div class="screen">
          <div class="play-layout">
            <div class="art-card">${sceneSvg(story, artMood)}</div>
            <div class="dialogue-card">
              <div class="speaker">${esc(speaker)}</div>
              <p>${esc(dialogue)}</p>
              <div class="progress-dots" aria-label="Kemajuan cerita">${dots}</div>
            </div>
            <div class="choice-area">
              <div class="choice-title">${esc(choiceTitle)}</div>
              ${feedback}
              <div class="choices">${choices}</div>
            </div>
          </div>
        </div>
      `);
    }

    function nextStory() {
      if (!session) return;
      if (["intro0", "intro1", "intro2", "bridge1", "bridge2", "preEnding", "choice1Result", "choice2Result", "finalResult"].includes(stepTypes[session.step])) {
        session.scores.reading += 2; session.pagesRead += 1;
      }
      session.feedback = ""; session.feedbackType = "";
      session.step = Math.min(session.step + 1, stepTypes.length - 1);
      playButton();
      if (stepTypes[session.step] === "ending") finalizeSession();
      renderPlay();
    }

    function choose(key, index) {
      if (!session) return;
      const option = session.story[key].options[index]; if (!option) return;
      session.choices[key] = option; session.scores.decision += option.points; session.wisdom += option.wisdom;
      session.feedback = option.points >= 15 ? `Pilihan bijaksana! +${option.points} poin.` : option.points > 0 ? `Pilihan aman. +${option.points} poin.` : "Pilihan ini kurang bijaksana.";
      session.feedbackType = option.points >= 15 ? "good" : option.points > 0 ? "" : "bad";
      session.step += 1;
      option.points >= 15 ? playCorrect() : playButton(); renderPlay();
    }

    function answerQuiz(key, index) {
      if (!session) return;
      const quiz = session.story[key]; if (!quiz || session.quizCorrect[key]) return;
      if (Number(index) === quiz.correct) {
        session.quizCorrect[key] = true; session.scores.quiz += 10;
        session.feedback = `${quiz.praise} +10 poin kuis.`; session.feedbackType = "good"; playCorrect();
      } else {
        session.feedback = "Belum tepat. Coba lagi."; session.feedbackType = "bad"; playWrong();
      }
      renderPlay();
    }

    function finalizeSession() {
      if (!session || session.saved) return;
      session.endingType = session.wisdom >= 4 && Object.keys(session.quizCorrect).length >= 2 ? "good" : session.wisdom <= 0 ? "bad" : "neutral";
      session.endingReached = true; session.saved = true;
      save.reading += session.scores.reading; save.quiz += session.scores.quiz; save.decision += session.scores.decision;
      if (!save.completed.includes(session.story.id)) save.completed.push(session.story.id);
      save.storyBest[session.story.id] = Math.max(save.storyBest[session.story.id] || 0, session.scores.reading + session.scores.quiz + session.scores.decision);
      persist();
    }

    function renderEnding() {
      if (!session) return renderMenu();
      const story = session.story; const ending = story.endings[session.endingType || "neutral"];
      const badges = getBadges(currentTotals(false)).map((badge) => `<span class="badge ${badge.unlocked ? "unlocked" : ""}">${badge.name}</span>`).join("");
      const total = session.scores.reading + session.scores.quiz + session.scores.decision;
      app.innerHTML = shell(`
        <div class="screen">
          <div class="summary-card">
            <div class="art-card" style="height: min(32vh, 260px); margin-bottom: 14px;">${sceneSvg(story, "ending")}</div>
            <h2>${esc(ending.title)}</h2>
            <p>${esc(ending.text)}</p>
            <p class="notice">${esc(ending.moral)}</p>
            <div class="stat-grid">
              <div class="stat"><b>Membaca</b><strong>${session.scores.reading}</strong></div>
              <div class="stat"><b>Kuis</b><strong>${session.scores.quiz}</strong></div>
              <div class="stat"><b>Keputusan</b><strong>${session.scores.decision}</strong></div>
              <div class="stat"><b>Skor Sesi</b><strong>${total}</strong></div>
            </div>
            <div class="badge-row">${badges}</div>
            <div class="action-row" style="margin-top: 15px;">
              <button class="primary green" data-action="show-eval">Isi Evaluasi Sesi Ini</button>
            </div>
          </div>
        </div>
      `);
    }

    function renderEvaluation() {
      app.innerHTML = shell(`
        <div class="screen">
          <form class="eval-card eval-form" data-eval-form>
            <h2>Evaluasi Minat Baca</h2>
            <p class="notice">Isi singkat ya. Jawabanmu akan masuk ke laporan guru.</p>
            <fieldset class="field"><legend>1. Apakah cerita ini menyenangkan?</legend><div class="radio-row">${["😞", "😐", "😊", "😄"].map((emoji, i) => `<label class="emoji-chip"><input type="radio" name="fun" value="${i + 1}" required><span>${emoji}</span></label>`).join("")}</div></fieldset>
            <label class="field"><span class="main-label">2. Bagian mana yang paling kamu sukai?</span>
                <select name="favoritePart" required><option value="Membaca cerita">Membaca cerita</option><option value="Memilih jalan cerita">Memilih jalan cerita</option><option value="Menjawab quiz">Menjawab quiz</option><option value="Melihat gambar">Melihat gambar</option></select>
            </label>
            <div class="field">
              <label class="main-label">Bagian Pengukuran Skala (1 = Tidak Setuju, 5 = Sangat Setuju)</label>
              ${["Saya senang membaca cerita di game ini.", "Saya ingin membaca cerita lain setelah bermain.", "Saya jadi lebih tertarik membaca dibanding sebelumnya."].map((question, qIndex) => `
                <fieldset class="field" style="background:#fffaf0;"><legend>${qIndex + 1}. ${esc(question)}</legend><div class="radio-row">${[1,2,3,4,5].map((value) => `<label class="scale-chip"><input type="radio" name="interest${qIndex}" value="${value}" required><span>${value}</span></label>`).join("")}</div></fieldset>
              `).join("")}
            </div>
            <div class="action-row"><button type="button" class="primary green" data-action="submit-eval">Simpan & Lihat Hasil</button></div>
          </form>
        </div>
      `);
    }

    function submitEvaluation() {
      const form = app.querySelector("[data-eval-form]");
      if (!form || !form.reportValidity()) return;
      const data = new FormData(form); let interest = 0;
      for (let i = 0; i < 3; i += 1) interest += Number(data.get(`interest${i}`) || 0);
      const percent = Math.round((interest / 15) * 100);
      
      const record = {
        date: new Date().toISOString(),
        name: playerName || "Anonim",
        storyTitle: session.story.title,
        score: session.scores.reading + session.scores.quiz + session.scores.decision,
        ending: session.endingType,
        quizCorrect: Object.keys(session.quizCorrect).length,
        interestPercent: percent
      };
      
      if(!save.records) save.records = [];
      save.records.push(record);
      persist(); playCorrect(); renderEvalResult(record);
    }

    function renderEvalResult(result) {
      const category = result.interestPercent >= 80 ? "Sangat Tinggi" : result.interestPercent >= 60 ? "Tinggi" : result.interestPercent >= 40 ? "Sedang" : "Rendah";
      app.innerHTML = shell(`
        <div class="screen center-screen">
          <div class="summary-card">
            <h2>Hasil Evaluasi Disimpan!</h2>
            <div class="stat-grid">
              <div class="stat"><b>Skor Total Sesi</b><strong>${result.score}</strong></div>
              <div class="stat"><b>Minat Baca</b><strong>${result.interestPercent}%</strong></div>
            </div>
            <p class="notice">Kategori Minat Baca: <strong>${category}</strong></p>
            <div class="action-row"><button class="primary" data-action="menu">Kembali ke Beranda</button></div>
          </div>
        </div>
      `);
    }

    // ===== FUNGSI DASHBOARD GURU =====
    function renderAdmin() {
      const records = save.records || [];
      const avgScore = records.length ? Math.round(records.reduce((s, r) => s + r.score, 0) / records.length) : 0;
      const avgInterest = records.length ? Math.round(records.reduce((s, r) => s + r.interestPercent, 0) / records.length) : 0;
      const playersCount = new Set(records.map(r => r.name)).size;
      const latest = records.slice(-10);

      app.innerHTML = shell(`
        <div class="screen">
          <div class="teacher-panel">
            <h2>Dashboard Guru & Peneliti</h2>
            <p class="muted">Seluruh rekaman data bermain anak dan hasil evaluasinya tersimpan otomatis di perangkat ini.</p>

            <div class="stat-grid" style="margin-top: 15px;">
              <div class="stat"><b>Total Anak</b><strong>${playersCount}</strong></div>
              <div class="stat"><b>Total Sesi</b><strong>${records.length}</strong></div>
              <div class="stat"><b>Rata-rata Skor</b><strong>${avgScore}</strong></div>
              <div class="stat"><b>Rata Minat Baca</b><strong>${avgInterest}%</strong></div>
            </div>

            <h3 style="margin-top: 25px; color: #873b22;">Grafik Minat Baca (10 Sesi Terakhir)</h3>
            <div class="chart">
              ${latest.length ? latest.map(item => `
                <div class="bar-wrap">
                  <div class="bar-fill" style="height: ${Math.max(10, item.interestPercent)}%;"></div>
                  <span class="bar-label" title="${esc(item.name)}">${esc(item.name)}</span>
                </div>
              `).join("") : '<p class="muted">Belum ada data grafik.</p>'}
            </div>

            <h3 style="margin-top: 25px; color: #873b22;">Tabel Riwayat Bermain Anak</h3>
            <div class="teacher-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Nama Anak</th>
                    <th>Judul Cerita</th>
                    <th>Skor Bermain</th>
                    <th>Tipe Ending</th>
                    <th>Kuis Benar</th>
                    <th>Minat Baca</th>
                  </tr>
                </thead>
                <tbody>
                  ${records.length ? records.map(item => `
                    <tr>
                      <td><strong>${esc(item.name)}</strong></td>
                      <td>${esc(item.storyTitle)}</td>
                      <td>${item.score} poin</td>
                      <td>${item.ending === "good" ? "Baik" : item.ending === "neutral" ? "Netral" : "Buruk"}</td>
                      <td>${item.quizCorrect} soal</td>
                      <td><strong>${item.interestPercent}%</strong></td>
                    </tr>
                  `).join("") : '<tr><td colspan="6">Belum ada rekaman data. Minta anak untuk bermain dan mengisi evaluasi terlebih dahulu.</td></tr>'}
                </tbody>
              </table>
            </div>

            <div class="action-row" style="margin-top: 25px;">
              <button class="primary alt" data-action="menu">Tutup Dashboard</button>
              <button class="primary danger" data-action="clear-records">Hapus Semua Data</button>
            </div>
          </div>
        </div>
      `, false);
    }

    // ===== FUNGSI GAMBAR SVG =====
    function sceneSvg(story, mood) {
      const id = story.id; const [c1, c2] = story.colors; const sky2 = mood === "ending" ? "#fff4a7" : "#aeeeff"; const sparkle = mood === "quiz" || mood === "ending" ? 1 : 0;
      const place = placeShapes(story.place, id, c1, c2);
      return `<svg class="story-art" viewBox="0 0 900 430" role="img" aria-label="Ilustrasi ${esc(story.title)}" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="sky-${id}" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#e9fbff"/><stop offset="1" stop-color="${sky2}"/></linearGradient><linearGradient id="ground-${id}" x1="0" x2="1"><stop stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="900" height="430" fill="url(#sky-${id})"/><circle cx="760" cy="72" r="43" fill="#ffdb65" opacity=".95"/><g class="cloud" fill="#fff" opacity=".82"><ellipse cx="145" cy="80" rx="48" ry="22"/><ellipse cx="190" cy="77" rx="55" ry="26"/><ellipse cx="235" cy="85" rx="38" ry="18"/></g><g class="cloud" fill="#fff" opacity=".72"><ellipse cx="520" cy="96" rx="42" ry="19"/><ellipse cx="560" cy="91" rx="50" ry="23"/><ellipse cx="602" cy="99" rx="35" ry="16"/></g>${place}<path d="M0 348 C150 294 266 335 400 306 C544 274 686 302 900 266 L900 430 L0 430 Z" fill="url(#ground-${id})" opacity=".93"/><path d="M350 430 C412 374 470 344 545 318 C490 374 485 405 510 430 Z" fill="#f7d08a" opacity=".95"/>${heroShape(story, c1, c2)}<g transform="translate(102 292)"><circle class="spark" cx="0" cy="0" r="9" fill="#fff17a" opacity="${sparkle ? 1 : .3}"/><text x="20" y="18" font-size="58">${story.icon}</text></g><g fill="#fff8a7" opacity="${sparkle ? .95 : .28}" class="spark"><path d="M710 155 l8 18 18 8 -18 8 -8 18 -8-18 -18-8 18-8z"/><path d="M160 180 l6 13 13 6 -13 6 -6 13 -6-13 -13-6 13-6z"/></g></svg>`;
    }
    function placeShapes(place, id, c1, c2) {
      if (place === "sea") return `<path d="M0 278 C90 252 175 305 270 278 C360 250 445 305 540 278 C640 246 735 306 900 268 L900 430 L0 430 Z" fill="#3cb7e9" opacity=".8"/><path d="M0 315 C120 287 230 336 340 310 C470 280 590 334 700 310 C780 292 835 300 900 292" fill="none" stroke="#e9fbff" stroke-width="8" opacity=".72"/><g transform="translate(210 235)"><path d="M0 65 L180 65 L145 105 L32 105 Z" fill="#a86433"/><path d="M90 0 L90 65" stroke="#74401f" stroke-width="8"/><path d="M98 10 L162 52 L98 52 Z" fill="#fff0b3"/></g>`;
      if (place === "forest") return `<g fill="#3eaa44"><circle cx="110" cy="236" r="58"/><circle cx="160" cy="210" r="62"/><circle cx="230" cy="238" r="56"/><circle cx="716" cy="218" r="70"/><circle cx="790" cy="250" r="62"/></g><g fill="#8a552b"><rect x="145" y="218" width="28" height="140" rx="11"/><rect x="750" y="220" width="32" height="140" rx="12"/></g><path d="M90 130 C135 170 150 210 135 283" fill="none" stroke="#2c8a3a" stroke-width="18"/><path d="M804 120 C756 172 742 216 758 290" fill="none" stroke="#2c8a3a" stroke-width="18"/>`;
      if (place === "mountain") return `<path d="M110 328 L330 98 L544 328 Z" fill="#7fb1ca"/><path d="M330 98 L392 165 L300 162 Z" fill="#fff7df"/><path d="M390 330 L622 130 L832 330 Z" fill="#9a8ad7"/><path d="M622 130 L686 196 L586 194 Z" fill="#fff7df"/><ellipse cx="608" cy="350" rx="210" ry="38" fill="#61c8ed" opacity=".82"/>`;
      if (place === "palace") return `<g transform="translate(120 142)"><rect x="0" y="105" width="285" height="150" rx="18" fill="#ffcf7e"/><rect x="35" y="50" width="70" height="205" fill="#f59a64"/><rect x="180" y="50" width="70" height="205" fill="#f59a64"/><path d="M20 50 L70 0 L120 50 Z" fill="#d95847"/><path d="M165 50 L215 0 L265 50 Z" fill="#d95847"/><rect x="115" y="130" width="56" height="125" rx="28" fill="#8d5432"/></g><path d="M560 292 C610 254 680 248 744 294" fill="none" stroke="#e8a53c" stroke-width="20" stroke-linecap="round"/>`;
      return `<g transform="translate(90 178)"><rect x="0" y="80" width="190" height="116" rx="12" fill="#c1783c"/><path d="M-20 84 L94 0 L210 84 Z" fill="#8d4f28"/><rect x="25" y="120" width="42" height="76" fill="#70401f"/><rect x="104" y="112" width="48" height="42" fill="#aeeeff"/></g><g transform="translate(635 168)"><rect x="0" y="88" width="170" height="106" rx="12" fill="#d0904b"/><path d="M-15 92 L80 20 L185 92 Z" fill="#92582b"/><rect x="72" y="122" width="42" height="72" fill="#714222"/></g><path d="M42 306 C88 250 110 218 108 140" fill="none" stroke="#6aa33d" stroke-width="16"/><path d="M82 190 C38 166 28 140 38 112" fill="none" stroke="#5aa031" stroke-width="13"/>`;
    }
    function heroShape(story, c1, c2) {
      const outfit = story.id === "malin" ? "#247fc0" : story.id === "timun" ? "#6abf45" : story.id === "sangkuriang" ? "#8456c8" : story.id === "keong" ? "#f2b63f" : "#f07485";
      return `<g class="hero-bob" transform="translate(610 174)"><ellipse cx="88" cy="210" rx="82" ry="18" fill="rgba(81,49,24,.22)"/><path d="M46 88 C36 120 42 164 20 202 L158 202 C135 163 142 116 126 88 Z" fill="${outfit}" stroke="#62351d" stroke-width="5"/><circle cx="86" cy="58" r="48" fill="#ffd29c" stroke="#62351d" stroke-width="5"/><path d="M42 48 C60 8 113 5 132 46 C108 28 76 26 42 48 Z" fill="#63351f"/><circle cx="70" cy="62" r="5" fill="#3f2415"/><circle cx="102" cy="62" r="5" fill="#3f2415"/><path d="M73 84 Q87 96 104 84" fill="none" stroke="#8b3e2b" stroke-width="5" stroke-linecap="round"/><path d="M48 112 C12 120 2 148 26 166" fill="none" stroke="#ffd29c" stroke-width="18" stroke-linecap="round"/><path d="M126 112 C166 119 174 148 148 168" fill="none" stroke="#ffd29c" stroke-width="18" stroke-linecap="round"/><rect x="55" y="198" width="22" height="60" rx="10" fill="#3f7d49"/><rect x="100" y="198" width="22" height="60" rx="10" fill="#3f7d49"/><text x="52" y="162" font-size="58">${story.icon}</text></g>`;
    }

    // ===== FUNGSI AUDIO AUDIO API =====
    function ensureAudio() {
      if (!audio) { const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return null; audio = { ctx: new Ctx(), master: null }; audio.master = audio.ctx.createGain(); audio.master.gain.value = soundOn ? 0.18 : 0; audio.master.connect(audio.ctx.destination); }
      if (audio.ctx.state === "suspended") audio.ctx.resume(); return audio;
    }
    function tone(freq, duration = 0.08, type = "sine", volume = 0.2, delay = 0) {
      if (!soundOn) return; const a = ensureAudio(); if (!a) return; const now = a.ctx.currentTime + delay; const osc = a.ctx.createOscillator(); const gain = a.ctx.createGain(); osc.type = type; osc.frequency.setValueAtTime(freq, now); gain.gain.setValueAtTime(0.0001, now); gain.gain.exponentialRampToValueAtTime(volume, now + 0.012); gain.gain.exponentialRampToValueAtTime(0.0001, now + duration); osc.connect(gain).connect(a.master); osc.start(now); osc.stop(now + duration + 0.02);
    }
    function playButton() { tone(520, .06, "triangle", .13); }
    function playCorrect() { tone(660, .09, "sine", .18); tone(880, .12, "sine", .16, .09); }
    function playWrong() { tone(220, .12, "sawtooth", .09); tone(170, .12, "sawtooth", .07, .1); }
    function startMusic() {
      if (!soundOn || musicTimer) return; ensureAudio(); const notes = [392, 440, 523, 494, 440, 392, 330, 392]; let index = 0;
      musicTimer = setInterval(() => { if (!soundOn) return; tone(notes[index % notes.length], .18, "sine", .045); index += 1; }, 720);
    }
    function stopMusic() { if (musicTimer) clearInterval(musicTimer); musicTimer = null; }
    function toggleSound() {
      soundOn = !soundOn; save.soundOn = soundOn; persist();
      if (audio?.master) audio.master.gain.value = soundOn ? 0.18 : 0;
      if (soundOn) { ensureAudio(); startMusic(); playCorrect(); } else { stopMusic(); }
      const btns = document.querySelectorAll(".sound-btn"); btns.forEach(b => { b.innerHTML = soundOn ? "🔊" : "🔇"; b.setAttribute("aria-label", soundOn ? "Matikan suara" : "Hidupkan suara"); });
    }

    // ===== PENGENDALI TOMBOL DAN EVENT =====
    app.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]"); if (!button) return;
      const action = button.dataset.action;
      if (action !== "toggle-sound") ensureAudio(); if (soundOn) startMusic();

      if (action === "open-menu" || action === "menu") { session = null; playButton(); renderMenu(); }
      if (action === "save-name") {
        const val = document.getElementById("playerNameInput").value.trim();
        if(val) { playerName = val; localStorage.setItem(NAME_KEY, val); playCorrect(); renderMenu(); } else { playWrong(); }
      }
      if (action === "start-story") startStory(button.dataset.story);
      if (action === "next-story") nextStory();
      if (action === "choose") choose(button.dataset.choiceKey, Number(button.dataset.index));
      if (action === "answer-quiz") answerQuiz(button.dataset.quizKey, Number(button.dataset.index));
      if (action === "show-eval") { playButton(); renderEvaluation(); }
      if (action === "submit-eval") submitEvaluation();
      if (action === "toggle-sound") toggleSound();
      if (action === "admin") { session = null; playButton(); renderAdmin(); }
      if (action === "clear-records") {
        if (confirm("Yakin ingin menghapus SELURUH rekap data siswa dari perangkat ini? (Data tidak bisa dikembalikan)")) {
          save.records = []; persist(); playWrong(); renderAdmin();
        }
      }
    });

    renderStart();
})();