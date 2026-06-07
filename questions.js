// ============================================================
// StudySpark OS Quiz - Question Database
// 120 soal pilihan ganda: 40 per modul
// Setiap soal: { id, module, difficulty, question, options, correct, explanation }
// module: 'memory' | 'storage' | 'user'
// difficulty: 'Mudah' | 'Sedang' | 'Sulit'
// correct: index 0-3 dari array options
// ============================================================

const QUESTIONS = [

  // ============================================================
  // MODUL 1: MANAJEMEN MEMORI (40 SOAL)
  // ============================================================

  // --- MUDAH (10 soal) ---
  {
    id: 1, module: 'memory', difficulty: 'Mudah',
    question: 'Apa fungsi utama RAM (Random Access Memory) dalam sistem komputer?',
    options: [
      'Menyimpan data secara permanen saat komputer mati',
      'Menyediakan penyimpanan sementara dan akses cepat bagi CPU untuk menjalankan program',
      'Mengatur distribusi daya ke seluruh komponen komputer',
      'Menghubungkan perangkat input/output ke processor'
    ],
    correct: 1,
    explanation: 'RAM adalah tempat penyimpanan sementara (volatile) yang digunakan CPU untuk menjalankan program. Fungsi utamanya: menyimpan program yang sedang dijalankan, menyimpan data yang sedang diproses, dan menyediakan akses yang jauh lebih cepat dibanding penyimpanan sekunder seperti hard disk.'
  },
  {
    id: 2, module: 'memory', difficulty: 'Mudah',
    question: 'Apa yang dimaksud dengan teknik "paging" dalam manajemen memori?',
    options: [
      'Teknik membagi memori menjadi bagian kecil dengan ukuran yang tidak tetap (variabel)',
      'Teknik membagi memori menjadi bagian kecil dengan ukuran yang tetap (fixed-size)',
      'Teknik menggabungkan blok memori yang terpisah menjadi satu blok besar',
      'Teknik memindahkan seluruh proses dari RAM ke disk secara berkala'
    ],
    correct: 1,
    explanation: 'Paging adalah teknik membagi memori menjadi bagian-bagian kecil dengan ukuran TETAP. Program dipecah menjadi "page" (potongan program) dan memori fisik dibagi menjadi "frame" (potongan memori fisik berukuran sama). OS kemudian mencocokkan (map) setiap page ke frame yang tersedia. Kelebihan utama: menghindari fragmentasi eksternal.'
  },
  {
    id: 3, module: 'memory', difficulty: 'Mudah',
    question: 'Apa yang dimaksud dengan "virtual memory"?',
    options: [
      'Memori fisik tambahan yang dipasang secara hardware untuk memperbesar kapasitas RAM',
      'Teknik yang membuat seolah-olah memori lebih besar dari kapasitas RAM yang sebenarnya',
      'Memori khusus yang hanya bisa diakses oleh proses milik kernel (sistem operasi)',
      'Memori yang tersimpan di dalam chip processor (CPU cache)'
    ],
    correct: 1,
    explanation: 'Virtual memory adalah teknik yang membuat seolah-olah memori lebih besar dari kapasitas RAM fisik yang sebenarnya. Caranya: data yang tidak sedang aktif digunakan disimpan di disk (swap space), sementara data yang aktif tetap di RAM. Manfaat: bisa menjalankan program yang lebih besar dari RAM, dan mendukung multitasking lebih baik.'
  },
  {
    id: 4, module: 'memory', difficulty: 'Mudah',
    question: 'Apa yang dimaksud dengan "swapping" dalam konteks manajemen memori?',
    options: [
      'Proses membagi memori menjadi page-page berukuran tetap',
      'Proses memindahkan data (proses/halaman) antara RAM dan penyimpanan disk',
      'Proses menggabungkan fragmen-fragmen memori yang tersebar',
      'Proses melindungi memori antar proses agar tidak saling mengganggu'
    ],
    correct: 1,
    explanation: 'Swapping adalah proses memindahkan data antara RAM dan disk (swap space). Ada dua jenis: "swap out" — memindahkan data dari RAM ke disk untuk membebaskan ruang RAM, dan "swap in" — membawa kembali data dari disk ke RAM ketika dibutuhkan. Tujuannya: membebaskan ruang RAM agar lebih banyak proses bisa berjalan.'
  },
  {
    id: 5, module: 'memory', difficulty: 'Mudah',
    question: 'Apa yang dimaksud dengan "fragmentasi internal" dalam konteks memori?',
    options: [
      'Kondisi di mana banyak ruang kosong kecil yang terpisah-pisah di memori sehingga tidak bisa digunakan',
      'Kondisi di mana terdapat sisa ruang yang tidak terpakai di dalam blok memori yang sudah dialokasikan',
      'Proses memori yang berjalan tidak efisien akibat banyak page fault',
      'Kehilangan data karena RAM penuh dan proses dipaksa berhenti'
    ],
    correct: 1,
    explanation: 'Fragmentasi internal terjadi ketika blok memori yang dialokasikan lebih besar dari yang dibutuhkan, sehingga ada sisa ruang yang terbuang di DALAM blok tersebut. Contoh: proses membutuhkan 5 KB, tapi blok terkecil yang tersedia 8 KB → 3 KB sisanya adalah fragmentasi internal. Paging bisa mengalami fragmentasi internal pada page terakhir.'
  },
  {
    id: 6, module: 'memory', difficulty: 'Mudah',
    question: 'Apa yang dimaksud dengan "fragmentasi eksternal" dalam konteks memori?',
    options: [
      'Sisa ruang tidak terpakai yang ada di dalam blok memori yang sudah dialokasikan',
      'Kondisi di mana banyak ruang kosong kecil yang terpisah-pisah sehingga total ruang cukup, namun tidak ada satu blok contigous yang cukup besar',
      'Kehilangan data saat proses berpindah dari RAM ke disk saat swap out',
      'Memori yang digunakan secara eksklusif oleh proses kernel sistem operasi'
    ],
    correct: 1,
    explanation: 'Fragmentasi eksternal terjadi ketika total ruang kosong di memori sebenarnya cukup, namun ruang-ruang kosong tersebut tersebar/terpisah-pisah (tidak contigous/bersebelahan), sehingga tidak ada satu blok yang cukup besar untuk mengalokasikan memori bagi proses baru. Teknik paging dapat menghilangkan masalah fragmentasi eksternal.'
  },
  {
    id: 7, module: 'memory', difficulty: 'Mudah',
    question: 'Perintah Linux mana yang digunakan untuk melihat penggunaan RAM secara ringkas dalam format yang mudah dibaca manusia?',
    options: [
      'cat /proc/meminfo',
      'free -h',
      'vmstat 1',
      'pmap $$'
    ],
    correct: 1,
    explanation: 'Perintah `free -h` menampilkan ringkasan penggunaan RAM dalam format human-readable (MB, GB). Output-nya menampilkan: total RAM, yang digunakan (used), yang kosong (free), yang dipakai bersama (shared), buffer/cache, dan RAM yang masih tersedia (available). Juga menampilkan informasi swap.'
  },
  {
    id: 8, module: 'memory', difficulty: 'Mudah',
    question: 'Dalam konteks teknik paging, apa yang disebut sebagai "page"?',
    options: [
      'Potongan dari memori fisik (RAM) dengan ukuran tetap',
      'Potongan dari program (proses) dengan ukuran tetap',
      'Tabel yang digunakan OS untuk memetakan alamat virtual ke alamat fisik',
      'Unit alokasi minimum pada hard disk'
    ],
    correct: 1,
    explanation: 'Dalam paging, "page" adalah potongan dari PROGRAM (proses) yang dibagi menjadi bagian berukuran tetap. Sedangkan "frame" adalah potongan dari MEMORI FISIK (RAM) yang juga berukuran tetap dan sama dengan page. OS mencocokkan (map) setiap page program ke frame yang tersedia di RAM menggunakan page table.'
  },
  {
    id: 9, module: 'memory', difficulty: 'Mudah',
    question: 'Dalam konteks teknik paging, apa yang disebut sebagai "frame"?',
    options: [
      'Potongan dari program (proses) yang akan di-load ke memori',
      'Potongan dari memori fisik (RAM) dengan ukuran tetap yang siap menampung page',
      'Ukuran blok terkecil pada hard disk untuk menyimpan data',
      'Tabel pemetaan antara page virtual dan fisik milik setiap proses'
    ],
    correct: 1,
    explanation: '"Frame" adalah potongan dari MEMORI FISIK (RAM) berukuran tetap yang digunakan untuk menampung page dari program. Dalam paging: RAM dibagi menjadi frame-frame berukuran sama (misal 4 KB), dan OS mencocokkan setiap page program ke frame yang tersedia. Satu frame hanya bisa diisi satu page pada satu waktu.'
  },
  {
    id: 10, module: 'memory', difficulty: 'Mudah',
    question: 'Apa tujuan utama dari mekanisme proteksi memori di sistem operasi Linux?',
    options: [
      'Mempercepat akses memori dengan mengoptimalkan alokasi cache',
      'Mencegah satu proses mengakses atau memodifikasi memori yang dimiliki proses lain',
      'Meningkatkan total kapasitas memori yang tersedia untuk semua proses',
      'Mengurangi fragmentasi memori agar alokasi lebih efisien'
    ],
    correct: 1,
    explanation: 'Proteksi memori adalah mekanisme yang diimplementasikan OS untuk memastikan setiap proses hanya bisa mengakses ruang memorinya sendiri. Tujuannya: mencegah satu proses mengakses/memodifikasi memori proses lain, menjaga stabilitas sistem, dan menghindari crash/error akibat akses memori ilegal. Jika proses melanggar, OS mengirimkan Segmentation Fault.'
  },

  // --- SEDANG (15 soal) ---
  {
    id: 11, module: 'memory', difficulty: 'Sedang',
    question: 'Apa perbedaan utama antara perintah `cat /proc/meminfo` dan `free -h`?',
    options: [
      'Keduanya menampilkan informasi yang identik, hanya berbeda format tampilan',
      '`cat /proc/meminfo` menampilkan detail informasi memori yang jauh lebih lengkap dibanding `free -h` yang hanya ringkasan',
      '`cat /proc/meminfo` hanya menampilkan informasi swap memory saja',
      '`free -h` menampilkan informasi per-proses, sedangkan `/proc/meminfo` hanya total sistem'
    ],
    correct: 1,
    explanation: '`cat /proc/meminfo` menampilkan detail lengkap kondisi memori sistem, mencakup MemTotal, MemFree, MemAvailable, Buffers, Cached, Active, Inactive, SwapTotal, SwapFree, dan banyak field lainnya. Sementara `free -h` hanya menampilkan ringkasan: total, used, free, shared, buff/cache, available, dan swap. Untuk analisis mendalam, gunakan /proc/meminfo.'
  },
  {
    id: 12, module: 'memory', difficulty: 'Sedang',
    question: 'Kolom `MemAvailable` dalam output `cat /proc/meminfo` menunjukkan...',
    options: [
      'Total kapasitas RAM yang terpasang secara fisik di motherboard',
      'RAM yang benar-benar kosong dan tidak dipakai oleh proses atau cache sama sekali',
      'Estimasi RAM yang masih bisa digunakan oleh aplikasi baru tanpa perlu menggunakan swap',
      'Jumlah swap space yang tersedia dan belum digunakan'
    ],
    correct: 2,
    explanation: '`MemAvailable` adalah estimasi RAM yang bisa digunakan oleh aplikasi baru TANPA mengakibatkan sistem terpaksa menggunakan swap. Nilainya lebih besar dari `MemFree` karena turut memperhitungkan buffer dan cache filesystem yang bisa dibebaskan jika diperlukan. Ini adalah metrik paling penting untuk menilai ketersediaan memori aktual.'
  },
  {
    id: 13, module: 'memory', difficulty: 'Sedang',
    question: 'Perintah Linux mana yang digunakan untuk melihat peta penggunaan memori dari sebuah proses tertentu berdasarkan PID-nya?',
    options: [
      'free -h <PID>',
      'vmstat <PID>',
      'pmap <PID>',
      'cat /proc/meminfo <PID>'
    ],
    correct: 2,
    explanation: 'Perintah `pmap <PID>` menampilkan peta penggunaan memori (memory map) dari suatu proses berdasarkan PID-nya. Output-nya menampilkan kolom: alamat virtual, ukuran memori yang dipetakan, hak akses (permission), dan nama file/library yang terkait dengan setiap segmen memori proses tersebut.'
  },
  {
    id: 14, module: 'memory', difficulty: 'Sedang',
    question: 'Dalam output perintah `vmstat`, kolom `si` menunjukkan...',
    options: [
      'System interrupt (interupsi sistem) per detik',
      'Swap in — jumlah data yang dipindahkan dari disk (swap space) ke RAM per detik',
      'Swap out — jumlah data yang dipindahkan dari RAM ke disk per detik',
      'Jumlah proses yang sedang aktif berjalan (running state)'
    ],
    correct: 1,
    explanation: 'Dalam output `vmstat`, kolom `si` (swap in) menunjukkan jumlah data (dalam KB per detik) yang dipindahkan dari swap space di disk KEMBALI ke RAM. Ini terjadi ketika sistem membutuhkan data yang sebelumnya telah di-swap out ke disk. Nilai si yang besar mengindikasikan sistem sering mengambil data dari disk.'
  },
  {
    id: 15, module: 'memory', difficulty: 'Sedang',
    question: 'Dalam output perintah `vmstat`, kolom `so` menunjukkan...',
    options: [
      'System output (keluaran sistem) per detik',
      'Swap in — data yang dipindahkan dari disk ke RAM',
      'Swap out — jumlah data yang dipindahkan dari RAM ke disk (swap space) per detik',
      'Jumlah proses yang berhenti atau diterminasi'
    ],
    correct: 2,
    explanation: 'Kolom `so` (swap out) pada vmstat menunjukkan jumlah data (KB per detik) yang dipindahkan dari RAM ke swap space di disk. Ini terjadi ketika RAM hampir penuh dan OS perlu membebaskan ruang dengan "mengusir" data yang jarang diakses ke disk. Nilai so yang terus besar adalah tanda sistem kekurangan RAM.'
  },
  {
    id: 16, module: 'memory', difficulty: 'Sedang',
    question: 'Perintah yang benar untuk mengetahui ukuran page (page size) di sistem Linux adalah...',
    options: [
      'cat /proc/meminfo | grep PageSize',
      'getconf PAGE_SIZE',
      'vmstat --page-info',
      'free --page-size'
    ],
    correct: 1,
    explanation: 'Perintah `getconf PAGE_SIZE` digunakan untuk mengetahui ukuran page di Linux. Pada sebagian besar sistem Linux modern (x86/x86_64), hasilnya adalah 4096 byte (4 KB). Nilai ini bisa berbeda tergantung arsitektur hardware (contoh: beberapa sistem ARM menggunakan 8192 atau 16384 byte).'
  },
  {
    id: 17, module: 'memory', difficulty: 'Sedang',
    question: 'Apa informasi penting yang ditampilkan oleh perintah `top` atau `htop`?',
    options: [
      'Hanya statistik penggunaan memori RAM secara total',
      'Monitoring proses secara real-time mencakup load average, Tasks, penggunaan CPU, RAM, Swap, dan daftar proses',
      'Hanya daftar proses yang sedang menggunakan swap space',
      'Hanya proses-proses yang berjalan di background (daemon)'
    ],
    correct: 1,
    explanation: '`top` dan `htop` adalah tool monitoring proses real-time. Informasi yang ditampilkan: load average (beban sistem), jumlah Tasks (proses), %Cpu(s) (persentase penggunaan CPU per kategori), Mem (penggunaan RAM), Swap (penggunaan swap), dan daftar semua proses yang berjalan diurutkan berdasarkan penggunaan resource.'
  },
  {
    id: 18, module: 'memory', difficulty: 'Sedang',
    question: 'Dalam output perintah `ps aux | grep bash`, kolom yang menampilkan Process ID (PID) adalah kolom ke...',
    options: [
      'Kolom pertama (USER)',
      'Kolom kedua (setelah username)',
      'Kolom ketiga (%CPU)',
      'Kolom keempat (%MEM)'
    ],
    correct: 1,
    explanation: 'Dalam output `ps aux`, urutan kolom dari kiri ke kanan adalah: USER (pemilik proses), PID (Process ID), %CPU (persentase CPU), %MEM (persentase memori), VSZ (virtual memory dalam KB), RSS (physical memory dalam KB), TTY (terminal), STAT (status proses), START (waktu mulai), TIME (total waktu CPU), COMMAND (nama perintah). Jadi PID ada di kolom kedua.'
  },
  {
    id: 19, module: 'memory', difficulty: 'Sedang',
    question: 'Perintah yang tepat untuk membersihkan cache memory di Linux (yang membutuhkan hak root) adalah...',
    options: [
      'sudo rm -rf /proc/cache/*',
      'sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches"',
      'sudo free --drop-cache=3',
      'sudo vmstat --flush-cache'
    ],
    correct: 1,
    explanation: 'Perintah `sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches"` membersihkan cache memory. `sync` terlebih dahulu memastikan semua data pending ditulis ke disk (mencegah kehilangan data). Kemudian `echo 3` membersihkan page cache (1), dentries+inodes (2), atau keduanya (3). Tanpa sudo/root, akan mendapat "Permission denied".'
  },
  {
    id: 20, module: 'memory', difficulty: 'Sedang',
    question: 'Kapan sistem Linux mulai aktif menggunakan swap space?',
    options: [
      'Setiap kali proses baru dibuat, swap langsung diaktifkan',
      'Ketika RAM hampir penuh dan OS perlu membebaskan ruang untuk proses yang lebih aktif',
      'Secara berkala setiap beberapa menit sebagai bagian dari rutin maintenance OS',
      'Hanya saat pertama kali sistem boot untuk menyiapkan ruang memori awal'
    ],
    correct: 1,
    explanation: 'Sistem Linux menggunakan swap space ketika RAM mulai penuh. OS akan memindahkan (swap out) data dari proses yang jarang aktif ke swap space di disk, sehingga RAM bisa digunakan oleh proses yang lebih aktif. Penggunaan swap yang berlebihan dapat menurunkan performa karena akses disk jauh lebih lambat dari RAM.'
  },
  {
    id: 21, module: 'memory', difficulty: 'Sedang',
    question: 'Apa yang ditampilkan oleh perintah `cat /proc/self/maps`?',
    options: [
      'Peta jaringan (network map) sistem yang sedang berjalan',
      'Pemetaan memori (memory mapping) dari proses yang sedang menjalankan perintah tersebut',
      'Statistik total penggunaan memori semua proses secara agregat',
      'Tabel halaman (page table) yang dikelola oleh kernel Linux'
    ],
    correct: 1,
    explanation: '`cat /proc/self/maps` menampilkan pemetaan memori (memory mapping) dari proses saat ini yang menjalankan perintah. Setiap baris menunjukkan satu segmen memori dengan format: [alamat_awal]-[alamat_akhir] [permission] [offset] [device] [inode] [nama_path/library]. Ini memperlihatkan bagaimana ruang alamat virtual proses diorganisir.'
  },
  {
    id: 22, module: 'memory', difficulty: 'Sedang',
    question: 'Dalam output `free -h`, kolom `buff/cache` menunjukkan...',
    options: [
      'Memori yang digunakan secara permanen dan tidak bisa dibebaskan oleh OS',
      'Memori yang digunakan untuk buffer I/O dan cache filesystem, namun dapat dibebaskan jika aplikasi membutuhkannya',
      'Memori yang digunakan secara eksklusif oleh kernel dan driver hardware',
      'Total penggunaan swap space yang sedang aktif digunakan'
    ],
    correct: 1,
    explanation: 'Kolom `buff/cache` pada `free -h` menunjukkan memori yang digunakan untuk buffer I/O dan cache filesystem. Penting: memori ini BISA dibebaskan oleh OS jika aplikasi membutuhkan lebih banyak RAM. Inilah mengapa kolom `available` biasanya lebih besar dari `free` — termasuk buff/cache yang bisa direclaim.'
  },
  {
    id: 23, module: 'memory', difficulty: 'Sedang',
    question: 'Apa yang dimaksud dengan "overcommit" memori di Linux?',
    options: [
      'Menggunakan swap space melebihi kapasitas yang dikonfigurasi',
      'Kebijakan kernel yang mengizinkan proses meminta alokasi memori melebihi RAM + swap yang tersedia secara fisik',
      'Membatasi secara ketat penggunaan memori oleh setiap proses',
      'Proses memindahkan data berulang kali antara RAM dan disk'
    ],
    correct: 1,
    explanation: 'Memory overcommit adalah kebijakan kernel Linux yang mengizinkan proses meminta (request) alokasi memori lebih besar dari RAM + swap yang tersedia. Ini dimungkinkan karena program jarang menggunakan semua memori yang diminta sekaligus (lazy allocation). Kebijakan overcommit diatur di `/proc/sys/vm/overcommit_memory`.'
  },
  {
    id: 24, module: 'memory', difficulty: 'Sedang',
    question: 'Perintah `vmstat 1` akan menampilkan statistik sistem setiap berapa lama?',
    options: [
      'Setiap 1 menit sekali',
      'Setiap 1 jam sekali',
      'Setiap 1 detik sekali secara terus-menerus',
      'Setiap 1 milidetik sekali'
    ],
    correct: 2,
    explanation: '`vmstat 1` menampilkan statistik memori, swap, I/O, sistem, dan CPU setiap 1 detik secara berkelanjutan. Angka setelah perintah vmstat adalah interval dalam satuan detik. Perintah ini berguna untuk memantau perubahan penggunaan memori dan aktivitas I/O secara real-time dari waktu ke waktu.'
  },
  {
    id: 25, module: 'memory', difficulty: 'Sedang',
    question: 'Kolom `r` dalam output `vmstat` pada bagian "procs" menunjukkan...',
    options: [
      'Jumlah proses yang sedang menunggu I/O (blocked)',
      'Jumlah proses yang siap dijalankan (runnable) dan menunggu jatah waktu CPU',
      'Kecepatan baca (read speed) dari disk dalam KB/detik',
      'Jumlah request jaringan (network request) per detik'
    ],
    correct: 1,
    explanation: 'Kolom `r` pada bagian "procs" di vmstat menunjukkan jumlah proses yang berada dalam status runnable — proses yang siap dijalankan dan menunggu giliran mendapatkan waktu CPU. Nilai `r` yang tinggi secara konsisten mengindikasikan CPU menjadi bottleneck dan tidak bisa menangani semua proses yang siap berjalan.'
  },

  // --- SULIT (15 soal) ---
  {
    id: 26, module: 'memory', difficulty: 'Sulit',
    question: 'Apa makna tepat dari nilai `overcommit_memory = 0` di `/proc/sys/vm/overcommit_memory`?',
    options: [
      'Kernel melarang semua bentuk overcommit; alokasi selalu dibatasi sesuai RAM + swap yang tersedia',
      'Kernel selalu mengizinkan semua permintaan alokasi memori tanpa batas apapun',
      'Kernel mengizinkan overcommit secara heuristik — program boleh minta lebih, namun kernel tetap melakukan estimasi kewajaran',
      'Kernel hanya mengizinkan overcommit sebesar kapasitas swap yang terpasang'
    ],
    correct: 2,
    explanation: 'Nilai 0 adalah default. Kernel mengizinkan overcommit secara HEURISTIK — program boleh meminta memori lebih besar dari RAM + swap, namun kernel tetap melakukan perkiraan apakah request tersebut masuk akal dan tidak berlebihan. Ini mode paling umum. Nilai 1 = selalu izinkan (berisiko OOM), Nilai 2 = tidak izinkan overcommit sama sekali.'
  },
  {
    id: 27, module: 'memory', difficulty: 'Sulit',
    question: 'Apa yang dapat disimpulkan jika nilai kolom `si` dan `so` pada output `vmstat` terus-menerus menunjukkan angka yang besar?',
    options: [
      'Sistem memiliki sangat banyak proses yang berjalan secara bersamaan',
      'Sistem sedang mengalami memory pressure tinggi — RAM tidak mencukupi, sehingga terjadi thrashing',
      'Salah satu disk mengalami kerusakan sehingga akses I/O menjadi lambat',
      'CPU sedang mengalami beban kerja yang sangat tinggi (CPU-bound workload)'
    ],
    correct: 1,
    explanation: 'Nilai `si` (swap in) dan `so` (swap out) yang secara konsisten besar menandakan sistem mengalami "thrashing" — kondisi di mana sistem menghabiskan lebih banyak waktu untuk memindahkan data antara RAM dan disk daripada benar-benar menjalankan proses. Ini sangat menurunkan performa. Solusi: tambah RAM atau kurangi jumlah proses.'
  },
  {
    id: 28, module: 'memory', difficulty: 'Sulit',
    question: 'Apa arti dari permission `r-xp` yang muncul pada output `cat /proc/<PID>/maps`?',
    options: [
      'Read, Execute, Write (semua akses), dan Public (bisa diakses proses lain)',
      'Read (bisa dibaca), tidak bisa ditulis (-), Execute (bisa dieksekusi), Private mapping (tidak di-share)',
      'Root access, Execute, dan Protected dari modifikasi oleh user biasa',
      'Read-only, Execute-only, dan Shared di antara beberapa proses'
    ],
    correct: 1,
    explanation: 'Dalam `/proc/<PID>/maps`, format permission adalah: r=read, w=write, x=execute, dan p=private (atau s=shared). Jadi `r-xp` berarti: bisa dibaca (r), tidak bisa ditulis (-), bisa dieksekusi (x), dan bersifat private (p). Ini biasanya untuk segmen kode program (.text section) yang perlu dieksekusi tapi tidak boleh dimodifikasi.'
  },
  {
    id: 29, module: 'memory', difficulty: 'Sulit',
    question: 'Apa yang terjadi secara teknis ketika sebuah program C mengeksekusi `*p = 10` dimana variabel pointer `p` diinisialisasi sebagai `NULL`?',
    options: [
      'Program berhasil menulis nilai 10 ke alamat memori 0 (null address)',
      'Program segera crash dengan error "Segmentation fault (core dumped)" karena mencoba mengakses memori yang diproteksi',
      'Program secara otomatis mengalokasikan memori baru dan menyimpan nilai 10 di sana',
      'Program masuk ke kondisi tunggu (blocked state) hingga memori tersedia untuk dialokasikan'
    ],
    correct: 1,
    explanation: 'Pointer `p = NULL` menunjuk ke alamat 0, wilayah yang diproteksi oleh OS (null pointer region). Ketika `*p = 10` dieksekusi, program mencoba menulis ke alamat 0 — ini adalah akses memori ilegal. OS mendeteksinya melalui mekanisme proteksi memori (MMU/page table) dan langsung mengirimkan sinyal SIGSEGV ke proses, menyebabkan "Segmentation fault (core dumped)". Ini adalah mekanisme proteksi memori yang bekerja sebagaimana mestinya.'
  },
  {
    id: 30, module: 'memory', difficulty: 'Sulit',
    question: 'Jika `getconf PAGE_SIZE` menghasilkan 4096 byte, berapa jumlah page yang dibutuhkan untuk sebuah program berukuran tepat 12.288 byte?',
    options: [
      '2 page',
      '3 page',
      '4 page',
      '12 page'
    ],
    correct: 1,
    explanation: 'Jumlah page = Ukuran program ÷ Page size = 12.288 byte ÷ 4.096 byte = 3 page. Karena 12.288 = 3 × 4.096, program ini tepat membutuhkan 3 page tanpa fragmentasi internal. Jika ukuran program tidak tepat kelipatan page size (misal 13.000 byte), page terakhir tidak akan penuh dan terjadi fragmentasi internal sebesar 4.096 - (13.000 mod 4.096) byte.'
  },
  {
    id: 31, module: 'memory', difficulty: 'Sulit',
    question: 'Apa perbedaan mendasar antara `MemFree` dan `MemAvailable` di `/proc/meminfo`?',
    options: [
      'Tidak ada perbedaan; keduanya menunjukkan jumlah RAM kosong yang persis sama',
      '`MemFree` = RAM benar-benar kosong (tidak dipakai sama sekali); `MemAvailable` = estimasi RAM yang bisa dipakai app baru, termasuk reclaimable cache',
      '`MemFree` = total RAM terpasang; `MemAvailable` = RAM yang sedang digunakan proses',
      '`MemFree` = untuk proses user; `MemAvailable` = untuk proses kernel'
    ],
    correct: 1,
    explanation: '`MemFree` adalah RAM yang benar-benar KOSONG dan tidak dipakai oleh apapun. `MemAvailable` adalah estimasi RAM yang bisa digunakan aplikasi baru, yang mencakup `MemFree` DITAMBAH buffer dan page cache yang bisa dibebaskan (reclaimable). `MemAvailable` selalu ≥ `MemFree` dan merupakan metrik yang lebih relevan untuk menilai ketersediaan memori aktual untuk aplikasi baru.'
  },
  {
    id: 32, module: 'memory', difficulty: 'Sulit',
    question: 'Kolom `id` dalam bagian CPU pada output `vmstat` menunjukkan apa?',
    options: [
      'ID dari proses yang paling banyak menggunakan CPU saat ini',
      'Persentase waktu CPU yang berada dalam kondisi idle (tidak memproses apapun)',
      'Jumlah interrupt per detik yang ditangani oleh CPU',
      'Jumlah proses yang teridentifikasi (identified) oleh scheduler OS'
    ],
    correct: 1,
    explanation: 'Dalam bagian CPU output `vmstat`, kolom-kolomnya adalah: `us` (user process time), `sy` (system/kernel time), `id` (idle — CPU tidak melakukan apapun), `wa` (menunggu I/O), `st` (stolen time - VM). Kolom `id` menunjukkan persentase waktu CPU yang menganggur. Nilai `id` tinggi = CPU tidak terlalu sibuk; nilai `id` rendah dan `wa` tinggi = bottleneck di I/O.'
  },
  {
    id: 33, module: 'memory', difficulty: 'Sulit',
    question: 'Secara teknis, apa yang dilakukan perintah `sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches"`?',
    options: [
      'Menghapus semua data di RAM secara permanen, termasuk data proses yang aktif',
      'Pertama `sync` menulis semua data pending ke disk, lalu `echo 3` membersihkan page cache, dentries, dan inodes dari RAM',
      'Menghapus file swap dan mereset seluruh konfigurasi manajemen memori kernel',
      'Mematikan paksa semua proses yang sedang menggunakan cache memory berlebihan'
    ],
    correct: 1,
    explanation: 'Dua langkah yang terjadi: (1) `sync` — menulis semua data dari RAM buffer ke disk agar tidak ada data yang hilang. (2) `echo 3 > /proc/sys/vm/drop_caches` — menginstruksikan kernel untuk membebaskan: page cache (nilai 1), dentries & inodes cache (nilai 2), atau semua ketiganya (nilai 3). Ini berguna untuk menguji performa disk tanpa pengaruh cache.'
  },
  {
    id: 34, module: 'memory', difficulty: 'Sulit',
    question: 'Mengapa perintah `echo 3 > /proc/sys/vm/drop_caches` membutuhkan hak akses root?',
    options: [
      'Karena operasi tersebut memodifikasi parameter kernel yang sensitif dan berdampak pada performa seluruh sistem',
      'Karena file di direktori /proc dimiliki oleh user biasa dan hanya bisa diakses dengan sudo',
      'Karena operasi drop cache dapat menyebabkan kerusakan permanen pada filesystem',
      'Karena perintah `echo` adalah perintah khusus yang hanya bisa digunakan oleh root'
    ],
    correct: 0,
    explanation: 'File `/proc/sys/vm/drop_caches` adalah virtual file yang merepresentasikan parameter kernel. Memodifikasinya mengubah perilaku kernel secara langsung dan berdampak pada seluruh sistem (membersihkan cache mempengaruhi performa semua proses). Oleh karena itu, akses write ke file ini dibatasi hanya untuk root sebagai mekanisme keamanan. Tanpa sudo, kernel akan menolak dengan "Permission denied".'
  },
  {
    id: 35, module: 'memory', difficulty: 'Sulit',
    question: 'Jika nilai kolom `swpd` pada output `vmstat` terus meningkat secara konsisten dari waktu ke waktu, apa kesimpulan yang paling tepat?',
    options: [
      'Kecepatan disk sedang dalam kondisi optimal dan mampu menangani semua request',
      'Sistem secara aktif melakukan swap out — semakin banyak data dipindahkan dari RAM ke disk karena RAM tidak mencukupi',
      'Sistem tidak menggunakan swap sama sekali, nilai swpd menunjukkan kapasitas yang tersedia',
      'CPU sedang mengalami beban berlebih (overload) dari proses-proses yang berjalan'
    ],
    correct: 1,
    explanation: '`swpd` menunjukkan total memori yang saat ini sedang digunakan sebagai swap (data di disk swap). Jika nilainya terus meningkat, artinya semakin banyak data yang dipindahkan dari RAM ke disk swap — tanda bahwa RAM tidak cukup untuk menampung semua proses aktif. Solusi: tambah kapasitas RAM, kurangi jumlah proses berjalan, atau optimalkan penggunaan memori aplikasi.'
  },
  {
    id: 36, module: 'memory', difficulty: 'Sulit',
    question: 'Apa makna permission `rw-p` yang sering muncul pada segmen heap atau stack di output `pmap <PID>`?',
    options: [
      'Read, Write, Execute, dan Public (bisa diakses proses lain)',
      'Read (bisa dibaca), Write (bisa ditulis), tidak bisa dieksekusi (-), dan Private mapping',
      'Root-only Write, Protected dari user biasa',
      'Read-Write mode untuk shared memory antar proses'
    ],
    correct: 1,
    explanation: 'Permission `rw-p` berarti: r=dapat dibaca, w=dapat ditulis, -=tidak dapat dieksekusi, p=private mapping (tidak di-share dengan proses lain). Segmen heap dan stack memiliki `rw-p` karena keduanya perlu dibaca dan ditulis (menyimpan data/variabel), namun tidak boleh dieksekusi sebagai kode program (untuk mencegah serangan code injection). Segmen kode (.text) biasanya `r-xp`.'
  },
  {
    id: 37, module: 'memory', difficulty: 'Sulit',
    question: 'Nilai `overcommit_memory = 1` di `/proc/sys/vm/overcommit_memory` berarti...',
    options: [
      'Kernel hanya mengizinkan overcommit sebesar 1 kali total kapasitas RAM yang terpasang',
      'Kernel SELALU mengizinkan semua permintaan alokasi memori tanpa batas, berisiko tinggi terhadap OOM Killer',
      'Kernel tidak pernah mengizinkan overcommit dalam kondisi apapun',
      'Kernel mengizinkan overcommit hanya sebesar kapasitas total swap yang dikonfigurasi'
    ],
    correct: 1,
    explanation: 'Nilai 1 berarti kernel SELALU mengizinkan semua permintaan alokasi memori, tidak peduli berapapun memori yang tersedia. Ini sangat berisiko: ketika memori fisik benar-benar habis, OOM Killer akan aktif dan mematikan proses secara paksa. Mode ini tidak disarankan untuk production server karena dapat menyebabkan aplikasi mati mendadak tanpa peringatan.'
  },
  {
    id: 38, module: 'memory', difficulty: 'Sulit',
    question: 'Apa risiko utama dari penggunaan memory overcommit yang berlebihan di sistem Linux?',
    options: [
      'CPU akan menjadi sangat lambat karena terlalu banyak proses yang berjalan',
      'OOM (Out of Memory) Killer akan aktif dan mematikan proses secara paksa ketika memori habis',
      'Hard disk akan rusak karena digunakan terlalu sering sebagai swap space',
      'Koneksi jaringan akan terputus karena buffer jaringan tidak mendapat alokasi memori'
    ],
    correct: 1,
    explanation: 'Risiko utama overcommit berlebihan adalah OOM Killer (Out of Memory Killer). Ketika RAM fisik + swap benar-benar habis, kernel Linux mengaktifkan OOM Killer yang memilih proses — biasanya yang menggunakan memori paling banyak atau yang "paling tidak penting" — dan mematikannya secara paksa. Ini bisa menyebabkan kehilangan data atau crash pada aplikasi penting yang tidak terduga.'
  },
  {
    id: 39, module: 'memory', difficulty: 'Sulit',
    question: 'Mengapa teknik paging dapat menghilangkan fragmentasi eksternal tetapi masih berpotensi mengalami fragmentasi internal?',
    options: [
      'Paging tidak menghilangkan fragmentasi eksternal; justru paging yang menciptakannya',
      'Karena frame berukuran tetap memungkinkan setiap frame diisi page manapun (tidak ada fragmentasi eksternal), namun page terakhir sebuah proses mungkin tidak penuh (terjadi fragmentasi internal)',
      'Paging menghilangkan kedua jenis fragmentasi sekaligus karena menggunakan ukuran yang adaptif',
      'Paging hanya menghilangkan fragmentasi internal, sementara fragmentasi eksternal tetap ada'
    ],
    correct: 1,
    explanation: 'Paging menghilangkan FRAGMENTASI EKSTERNAL karena semua frame berukuran sama — OS bisa mengisi frame manapun dengan page manapun, tidak perlu blok memori yang bersebelahan (contigous). Namun, FRAGMENTASI INTERNAL masih bisa terjadi pada page terakhir suatu proses: jika ukuran proses tidak tepat kelipatan page size, page terakhir akan memiliki sisa ruang yang tidak terpakai.'
  },
  {
    id: 40, module: 'memory', difficulty: 'Sulit',
    question: 'Apa yang terjadi pada sistem jika nilai `wa` (wait I/O) dalam output `vmstat` secara konsisten menunjukkan angka yang sangat tinggi (misalnya >30%)?',
    options: [
      'CPU sedang menjalankan terlalu banyak proses komputasi secara bersamaan',
      'CPU sering menganggur menunggu operasi I/O (disk/jaringan) selesai — disk menjadi bottleneck performa sistem',
      'RAM sudah penuh dan sistem sedang aktif melakukan swap secara intensif',
      'Jaringan mengalami packet loss yang menyebabkan lambatnya transfer data'
    ],
    correct: 1,
    explanation: 'Nilai `wa` (wait I/O) yang tinggi menandakan CPU sering dalam kondisi menganggur sambil menunggu operasi I/O (biasanya disk read/write) selesai. Ini mengindikasikan disk menjadi bottleneck — disk tidak cukup cepat melayani semua request I/O. Ini sering terjadi bersamaan dengan nilai `so`/`si` yang besar (sistem sedang swap intensif, akses disk sangat sering).'
  },

  // ============================================================
  // MODUL 2: MASS STORAGE (40 SOAL)
  // ============================================================

  // --- MUDAH (10 soal) ---
  {
    id: 41, module: 'storage', difficulty: 'Mudah',
    question: 'Apa yang dimaksud dengan "mass storage" dalam sistem komputer?',
    options: [
      'Memori sementara berkapasitas besar yang digunakan CPU untuk memproses data',
      'Media penyimpanan sekunder berkapasitas besar untuk menyimpan data secara permanen (non-volatile)',
      'Memori khusus yang terpasang langsung di dalam chip processor',
      'Sistem jaringan penyimpanan yang terhubung melalui internet (cloud storage)'
    ],
    correct: 1,
    explanation: 'Mass storage adalah media penyimpanan sekunder yang digunakan untuk menyimpan data secara permanen (data tetap ada meskipun listrik mati / non-volatile). Karakteristiknya: kapasitas besar, non-volatile, namun akses lebih lambat dibanding RAM. Contoh: HDD (Hard Disk Drive), SSD (Solid State Drive), Optical disk (CD/DVD), dan Magnetic tape.'
  },
  {
    id: 42, module: 'storage', difficulty: 'Mudah',
    question: 'HDD adalah singkatan dari...',
    options: [
      'High Density Drive',
      'Hard Disk Drive',
      'Hardware Data Device',
      'Hybrid Data Drive'
    ],
    correct: 1,
    explanation: 'HDD adalah singkatan dari Hard Disk Drive. HDD menggunakan piringan (platter) magnetik yang berputar untuk menyimpan data secara magnetis. HDD memiliki komponen mekanis bergerak seperti read/write head yang terbang di atas permukaan platter dan spindle yang memutar platter. Komponen mekanis ini membuat HDD lebih lambat dan rentan terhadap guncangan dibanding SSD.'
  },
  {
    id: 43, module: 'storage', difficulty: 'Mudah',
    question: 'Komponen hard disk yang bertugas membaca dan menulis data pada platter disebut...',
    options: [
      'Platter (piringan magnetik)',
      'Spindle (poros putar)',
      'Read/Write Head (kepala baca/tulis)',
      'Track (jalur pada platter)'
    ],
    correct: 2,
    explanation: 'Read/Write Head adalah komponen hard disk yang bertanggung jawab membaca dan menulis data. Head ini bergerak di atas permukaan platter dengan jarak yang sangat kecil (nanometer) tanpa menyentuhnya, menggunakan medan elektromagnetik untuk membaca dan menulis bit data secara magnetis. Kerusakan head biasanya menyebabkan "head crash" yang bisa merusak seluruh data.'
  },
  {
    id: 44, module: 'storage', difficulty: 'Mudah',
    question: '"Track" pada hard disk adalah...',
    options: [
      'Unit penyimpanan terkecil pada hard disk yang berisi 512 byte data',
      'Lingkaran konsentris pada permukaan platter tempat data disimpan secara magnetis',
      'Kepala baca/tulis yang bergerak di atas permukaan platter',
      'Kecepatan putaran platter yang diukur dalam RPM'
    ],
    correct: 1,
    explanation: 'Track adalah lingkaran-lingkaran konsentris pada permukaan platter hard disk tempat data disimpan. Satu platter memiliki ribuan track dari tepi luar hingga ke tengah. Setiap track dibagi lagi menjadi sektor-sektor (sectors). Track yang berdekatan secara vertikal di seluruh platter disebut "cylinder".'
  },
  {
    id: 45, module: 'storage', difficulty: 'Mudah',
    question: '"Sector" pada hard disk adalah...',
    options: [
      'Keseluruhan lingkaran pada platter dari tepi ke tengah',
      'Unit penyimpanan data terkecil pada track hard disk',
      'Lapisan bahan magnetik pada permukaan platter',
      'Sumbu putar (poros) yang memutar semua platter secara bersamaan'
    ],
    correct: 1,
    explanation: 'Sector adalah unit penyimpanan data terkecil pada track hard disk. Secara tradisional, setiap sektor menyimpan 512 byte data. Hard disk modern (Advanced Format) menggunakan sektor 4096 byte (4 KB). Ketika OS membaca atau menulis data, operasi dilakukan dalam satuan sektor (atau blok yang merupakan kelipatan sektor).'
  },
  {
    id: 46, module: 'storage', difficulty: 'Mudah',
    question: 'SSD adalah singkatan dari...',
    options: [
      'Solid Steel Drive',
      'Solid State Drive',
      'Super Speed Drive',
      'Static Storage Device'
    ],
    correct: 1,
    explanation: 'SSD adalah Solid State Drive. SSD menggunakan chip memori flash (NAND flash) untuk menyimpan data secara elektronik, tanpa ada komponen mekanis bergerak seperti platter atau head. Keunggulan SSD: jauh lebih cepat dari HDD, lebih tahan guncangan, lebih senyap, dan lebih hemat daya. Kekurangan: harga per GB lebih mahal dari HDD.'
  },
  {
    id: 47, module: 'storage', difficulty: 'Mudah',
    question: 'RAID adalah singkatan dari...',
    options: [
      'Random Access Integrated Drive',
      'Redundant Array of Independent Disks',
      'Rapid Access Integrated Disk',
      'Reliable Array of Interconnected Drives'
    ],
    correct: 1,
    explanation: 'RAID adalah Redundant Array of Independent Disks. RAID adalah teknik menggabungkan beberapa disk fisik menjadi satu unit logis untuk meningkatkan performa, kapasitas, atau keandalan (redundancy/fault tolerance) data. Ada berbagai level RAID (0, 1, 5, 6, 10, dll.) dengan trade-off berbeda antara performa, kapasitas, dan keamanan data.'
  },
  {
    id: 48, module: 'storage', difficulty: 'Mudah',
    question: 'RAID 0 menggunakan teknik apa untuk meningkatkan performa?',
    options: [
      'Mirroring (menduplikasi data ke semua disk)',
      'Striping (memecah dan mendistribusikan data ke beberapa disk secara bergantian)',
      'Parity (menyimpan informasi pemulihan data terpisah)',
      'Kombinasi mirroring dan striping sekaligus'
    ],
    correct: 1,
    explanation: 'RAID 0 menggunakan teknik striping: data dipecah menjadi blok-blok kecil (stripe) dan didistribusikan secara bergantian ke semua disk dalam array. Ini memungkinkan operasi baca/tulis dilakukan secara paralel ke beberapa disk sekaligus, sehingga throughput meningkat signifikan. Kekurangan fatal: TIDAK ada redundancy — jika satu disk rusak, semua data hilang.'
  },
  {
    id: 49, module: 'storage', difficulty: 'Mudah',
    question: 'RAID 1 menggunakan teknik apa untuk memberikan perlindungan data?',
    options: [
      'Striping (memecah data ke beberapa disk)',
      'Mirroring (menduplikasi data identik ke semua disk dalam array)',
      'Parity (menyimpan data checksum untuk pemulihan)',
      'Compression (mengompresi data untuk efisiensi ruang)'
    ],
    correct: 1,
    explanation: 'RAID 1 menggunakan teknik mirroring: data yang sama ditulis secara identik ke semua disk dalam array (minimal 2 disk). Jika satu disk rusak, data masih sepenuhnya tersedia di disk lainnya. Ini memberikan fault tolerance terbaik. Namun, kapasitas efektif hanya = kapasitas satu disk (sisa digunakan untuk mirror). Performa baca bisa meningkat, tulis sama seperti satu disk.'
  },
  {
    id: 50, module: 'storage', difficulty: 'Mudah',
    question: 'Apa fungsi utama perintah `lsblk` di Linux?',
    options: [
      'Menampilkan statistik penggunaan memori RAM secara real-time',
      'Menampilkan informasi semua block storage device (disk dan partisi) dalam format pohon (tree)',
      'Menghapus partisi disk yang tidak digunakan secara otomatis',
      'Mengukur dan melaporkan kecepatan baca/tulis dari semua disk yang terpasang'
    ],
    correct: 1,
    explanation: '`lsblk` (list block devices) menampilkan informasi semua block storage device dalam format tree yang mudah dibaca. Output menunjukkan: nama device (sda, sdb, dll.), ukuran (SIZE), tipe (disk/part/rom), filesystem (FSTYPE), dan mount point (MOUNTPOINT). Sangat berguna untuk melihat struktur storage secara cepat.'
  },

  // --- SEDANG (15 soal) ---
  {
    id: 51, module: 'storage', difficulty: 'Sedang',
    question: 'Dalam output `lsblk -d -o name,rota,size,model`, nilai `ROTA = 1` pada sebuah device menunjukkan bahwa device tersebut adalah...',
    options: [
      'SSD (Solid State Drive) berkecepatan tinggi',
      'HDD (Hard Disk Drive) yang menggunakan mekanisme piringan berputar (rotational disk)',
      'NVMe SSD yang terhubung melalui interface PCIe',
      'Optical drive (CD/DVD ROM) yang sedang terpasang'
    ],
    correct: 1,
    explanation: 'Kolom ROTA (rotational) pada output lsblk menunjukkan apakah device menggunakan mekanisme rotasi (piringan berputar): ROTA=1 berarti HDD (menggunakan platter yang berputar), ROTA=0 berarti SSD atau NVMe (tidak ada komponen berputar). Ini adalah cara mudah mengidentifikasi tipe storage dari command line.'
  },
  {
    id: 52, module: 'storage', difficulty: 'Sedang',
    question: 'Apa fungsi perintah `sudo fdisk -l` di Linux?',
    options: [
      'Memformat semua disk yang terpasang secara otomatis',
      'Menampilkan informasi detail semua disk, partisi, ukuran, dan tipe partisi (hanya membaca, tidak memodifikasi)',
      'Menghapus partisi yang rusak atau tidak terpakai dari semua disk',
      'Membuat filesystem baru pada disk atau partisi yang dipilih'
    ],
    correct: 1,
    explanation: '`sudo fdisk -l` digunakan untuk MEMBACA dan menampilkan informasi: semua disk yang terdeteksi, partisi pada setiap disk, ukuran (GiB), tipe partisi (EFI System, Linux filesystem, Linux swap, dll.), model disk, sector size, dan tipe partisi table (GPT atau MBR). Flag `-l` = list, tidak membuat perubahan apapun. Butuh sudo karena mengakses level hardware.'
  },
  {
    id: 53, module: 'storage', difficulty: 'Sedang',
    question: 'Perintah `blkid` di Linux digunakan untuk...',
    options: [
      'Mengukur kecepatan baca/tulis setiap block device yang terpasang',
      'Menampilkan UUID, tipe filesystem, label, dan PARTUUID setiap block device',
      'Memblokir akses ke device storage tertentu untuk alasan keamanan',
      'Menampilkan total kapasitas gabungan semua disk yang terpasang'
    ],
    correct: 1,
    explanation: '`blkid` menampilkan informasi identifikasi block device: UUID (Universally Unique Identifier — ID unik tiap filesystem), TYPE (jenis filesystem: ext4, vfat, ntfs, swap, dll.), PARTUUID (ID unik partisi), dan LABEL/PARTLABEL (nama label). UUID sangat berguna di `/etc/fstab` karena tidak berubah meski nama device (`/dev/sda1`) berubah akibat penambahan disk baru.'
  },
  {
    id: 54, module: 'storage', difficulty: 'Sedang',
    question: 'Perintah `df -h` di Linux digunakan untuk...',
    options: [
      'Defragmentasi filesystem untuk meningkatkan performa disk',
      'Menampilkan penggunaan disk (filesystem) dalam format human-readable (MB, GB, TB)',
      'Menghapus file-file besar yang memenuhi disk secara otomatis',
      'Mengunduh file dari internet menggunakan protokol HTTP'
    ],
    correct: 1,
    explanation: '`df -h` (disk free — human readable) menampilkan penggunaan disk untuk setiap filesystem yang di-mount. Output mencakup: Filesystem (device), Size (ukuran total), Used (terpakai), Avail (tersisa), Use% (persentase penggunaan), dan Mounted on (mount point). Flag `-h` mengkonversi ukuran ke format mudah dibaca (KB, MB, GB, TB).'
  },
  {
    id: 55, module: 'storage', difficulty: 'Sedang',
    question: 'Perintah `du -sh *` di Linux digunakan untuk...',
    options: [
      'Menghapus semua file dalam direktori aktif secara paksa',
      'Menampilkan ringkasan ukuran setiap file dan direktori dalam direktori aktif saat ini',
      'Menduplikasi semua file penting ke lokasi backup',
      'Mengunduh dan mengekstrak file terkompresi dari internet'
    ],
    correct: 1,
    explanation: '`du -sh *` menampilkan penggunaan disk (disk usage) untuk setiap item dalam direktori saat ini. Flag `-s` = summary (tampilkan total per item, bukan per sub-direktori), `-h` = human-readable. Berguna untuk mencari file atau direktori yang memakan ruang disk paling banyak. Untuk melihat lebih detail per level: `du -ah --max-depth=1 | sort -h`.'
  },
  {
    id: 56, module: 'storage', difficulty: 'Sedang',
    question: 'Dalam konteks hard disk, "seek time" adalah...',
    options: [
      'Waktu total yang dibutuhkan untuk mentransfer data dari disk ke RAM atau sebaliknya',
      'Waktu yang dibutuhkan read/write head untuk bergerak dan memposisikan diri di atas track yang dituju',
      'Kecepatan rotasi platter disk yang diukur dalam RPM (Rotations Per Minute)',
      'Waktu tunggu hingga sektor yang dituju berputar ke posisi tepat di bawah head'
    ],
    correct: 1,
    explanation: 'Seek time adalah waktu yang dibutuhkan read/write head untuk bergerak dari posisi saat ini ke track yang dituju. Rumus: Seek Time = Jumlah track yang dilewati × Waktu per track. Semakin jauh track tujuan dari posisi head saat ini, semakin lama seek time. Seek time adalah komponen terbesar dari total akses time pada HDD.'
  },
  {
    id: 57, module: 'storage', difficulty: 'Sedang',
    question: '"Rotational latency" pada hard disk adalah...',
    options: [
      'Kecepatan head bergerak dari satu track ke track lain pada platter',
      'Waktu tunggu hingga sektor yang dituju berputar ke posisi tepat di bawah read/write head',
      'Total waktu yang diperlukan dari pengiriman request hingga data diterima oleh CPU',
      'Waktu yang diperlukan untuk mentransfer satu sektor data dari platter ke buffer disk'
    ],
    correct: 1,
    explanation: 'Rotational latency adalah waktu yang dibutuhkan platter disk untuk berputar hingga sektor yang dituju berada tepat di bawah read/write head. Dalam kondisi terburuk, harus menunggu hampir satu putaran penuh. Rata-rata rotational latency = waktu setengah putaran = 60 / (2 × RPM) detik. Disk 7200 RPM memiliki rata-rata rotational latency sekitar 4.17 ms.'
  },
  {
    id: 58, module: 'storage', difficulty: 'Sedang',
    question: 'Rumus untuk menghitung rata-rata rotational latency pada hard disk adalah...',
    options: [
      'RPM × 60',
      '60 / (2 × RPM)',
      'RPM / 60',
      '2 × RPM / 60'
    ],
    correct: 1,
    explanation: 'Average Rotational Latency = 60 / (2 × RPM) detik. Angka 60 = detik dalam satu menit, angka 2 = rata-rata menunggu setengah putaran penuh (bukan satu putaran penuh). Contoh untuk disk 7200 RPM: 60 / (2 × 7200) = 60 / 14400 = 0.00417 detik ≈ 4.17 ms. Untuk disk 5400 RPM: 60/(2×5400) ≈ 5.56 ms.'
  },
  {
    id: 59, module: 'storage', difficulty: 'Sedang',
    question: 'Algoritma disk scheduling FCFS (First Come First Served) bekerja dengan cara...',
    options: [
      'Selalu melayani request yang posisi track-nya paling dekat dengan posisi head saat ini',
      'Melayani semua request disk sesuai urutan kedatangannya, tanpa mempertimbangkan posisi head',
      'Menggerakkan head ke satu arah melayani semua request, lalu berbalik arah ketika mencapai ujung',
      'Memilih request secara acak untuk menghindari starvation pada request yang jauh'
    ],
    correct: 1,
    explanation: 'FCFS (First Come First Served) melayani request disk tepat sesuai urutan kedatangannya — request pertama yang tiba dilayani pertama, dst. Ini adalah algoritma paling sederhana dan paling adil (tidak ada starvation). Kelemahannya: sering menghasilkan total head movement yang sangat besar karena head bergerak bolak-balik tanpa optimasi posisi.'
  },
  {
    id: 60, module: 'storage', difficulty: 'Sedang',
    question: 'Algoritma disk scheduling SSTF (Shortest Seek Time First) bekerja dengan cara...',
    options: [
      'Melayani request sesuai urutan kedatangan tanpa melihat posisi head',
      'Selalu memilih dan melayani request yang membutuhkan seek time paling pendek dari posisi head saat ini',
      'Menggerakkan head ke satu arah hingga mencapai ujung disk, kemudian berbalik arah',
      'Melayani request secara acak untuk distribusi yang lebih merata'
    ],
    correct: 1,
    explanation: 'SSTF (Shortest Seek Time First) selalu memilih request yang paling dekat dengan posisi head saat ini (seek time terpendek). Ini lebih efisien dari FCFS dalam meminimalkan total head movement. Namun, kelemahannya: bisa menyebabkan starvation — request di track yang jauh dari area sibuk mungkin tidak pernah dilayani jika terus ada request baru yang lebih dekat.'
  },
  {
    id: 61, module: 'storage', difficulty: 'Sedang',
    question: 'Algoritma SCAN pada disk scheduling bekerja dengan cara...',
    options: [
      'Melayani request sesuai urutan kedatangan (FIFO)',
      'Selalu memilih request yang paling dekat dari posisi head saat ini',
      'Head bergerak ke satu arah melayani semua request yang ditemui, ketika mencapai ujung disk head berbalik arah',
      'Head langsung loncat ke awal disk setelah mencapai ujung, tanpa melayani request di arah berlawanan'
    ],
    correct: 2,
    explanation: 'Algoritma SCAN (juga disebut elevator algorithm) menggerakkan head disk ke satu arah, melayani semua request yang ditemui di sepanjang perjalanannya. Ketika head mencapai ujung disk (atau track terakhir yang ada request-nya), head berbalik arah dan mulai melayani request dari arah berlawanan. Mirip cara kerja lift (elevator) yang naik-turun melayani penumpang.'
  },
  {
    id: 62, module: 'storage', difficulty: 'Sedang',
    question: 'Perintah yang benar untuk mounting partisi `/dev/sdb1` ke direktori `/mnt/data` di Linux adalah...',
    options: [
      'sudo attach /dev/sdb1 /mnt/data',
      'sudo mount /dev/sdb1 /mnt/data',
      'sudo connect /dev/sdb1 /mnt/data',
      'sudo link /dev/sdb1 /mnt/data'
    ],
    correct: 1,
    explanation: '`sudo mount /dev/sdb1 /mnt/data` memasang (mount) partisi `/dev/sdb1` ke mount point `/mnt/data`. Setelah di-mount, konten partisi bisa diakses melalui direktori `/mnt/data`. Direktori mount point harus sudah ada sebelumnya (buat dengan `mkdir`). Untuk unmounting: `sudo umount /mnt/data`.'
  },
  {
    id: 63, module: 'storage', difficulty: 'Sedang',
    question: 'Perintah `swapon --show` di Linux digunakan untuk...',
    options: [
      'Mengaktifkan swap baru dari file atau partisi yang ditentukan',
      'Menampilkan informasi semua swap yang aktif: nama, tipe, ukuran total, penggunaan, dan prioritas',
      'Menonaktifkan semua swap yang sedang aktif di sistem',
      'Mengatur prioritas mana swap yang digunakan pertama kali'
    ],
    correct: 1,
    explanation: '`swapon --show` menampilkan informasi tentang swap yang sedang aktif di sistem. Output mencakup kolom: NAME (lokasi swap — file atau partisi, contoh `/dev/sda3` atau `/swapfile`), TYPE (partition atau file), SIZE (ukuran total), USED (jumlah yang sedang digunakan), dan PRIO (prioritas — nilai lebih tinggi = lebih diprioritaskan).'
  },
  {
    id: 64, module: 'storage', difficulty: 'Sedang',
    question: 'Perintah `iostat -dx 1` di Linux digunakan untuk...',
    options: [
      'Menampilkan daftar semua disk dan partisi yang terpasang di sistem',
      'Menampilkan statistik I/O disk secara real-time dengan detail extended setiap 1 detik',
      'Memeriksa integritas filesystem dan memperbaiki error yang ditemukan',
      'Menampilkan kapasitas total dan utilisasi semua disk yang terpasang'
    ],
    correct: 1,
    explanation: '`iostat -dx 1` menampilkan statistik performa I/O disk secara real-time: `-d` = device statistics, `-x` = extended (kolom detail tambahan), `1` = interval 1 detik. Kolom penting: r/s (read/detik), w/s (write/detik), rkB/s dan wkB/s (throughput), r_await dan w_await (latency rata-rata), dan `%util` (persentase utilisasi disk).'
  },
  {
    id: 65, module: 'storage', difficulty: 'Sedang',
    question: 'RAID 5 menggunakan kombinasi teknik apa?',
    options: [
      'Hanya striping tanpa redundancy (sama seperti RAID 0)',
      'Mirroring penuh ke semua disk (sama seperti RAID 1)',
      'Striping dengan distributed parity — data dan parity didistribusikan ke semua disk',
      'Kombinasi RAID 0 dan RAID 1 secara bersarang (nested RAID)'
    ],
    correct: 2,
    explanation: 'RAID 5 menggunakan striping dengan DISTRIBUTED PARITY. Data dan informasi parity (blok paritas untuk pemulihan data) didistribusikan merata ke semua disk dalam array — tidak ada satu disk khusus untuk parity. Kebutuhan minimum: 3 disk. Dapat mentolerir kegagalan 1 disk. Kapasitas efektif = (n-1) disk, dimana n = jumlah disk total. Baik untuk workload baca yang tinggi.'
  },

  // --- SULIT (15 soal) ---
  {
    id: 66, module: 'storage', difficulty: 'Sulit',
    question: 'Dengan request queue [98, 183, 37, 122, 14, 124, 65, 67] dan head awal di track 53, berapa total head movement menggunakan algoritma FCFS?',
    options: [
      '236 track',
      '640 track',
      '208 track',
      '544 track'
    ],
    correct: 1,
    explanation: 'FCFS melayani request secara berurutan dari antrian: 53→98=|45|, 98→183=|85|, 183→37=|146|, 37→122=|85|, 122→14=|108|, 14→124=|110|, 124→65=|59|, 65→67=|2|. Total = 45+85+146+85+108+110+59+2 = 640 track. FCFS sering menghasilkan total head movement besar karena tidak mempertimbangkan posisi head saat ini.'
  },
  {
    id: 67, module: 'storage', difficulty: 'Sulit',
    question: 'Jika sebuah hard disk memiliki kecepatan rotasi 7200 RPM, berapa rata-rata rotational latency-nya dalam milidetik?',
    options: [
      '7.2 ms',
      '8.33 ms',
      '4.17 ms',
      '3.6 ms'
    ],
    correct: 2,
    explanation: 'Average Rotational Latency = 60 / (2 × RPM) = 60 / (2 × 7200) = 60 / 14400 = 0.004167 detik = 4.167 ms ≈ 4.17 ms. Angka 2 mewakili rata-rata menunggu setengah putaran (half rotation). Ini adalah waktu rata-rata yang diperlukan platter berputar hingga sektor yang diinginkan berada tepat di bawah head.'
  },
  {
    id: 68, module: 'storage', difficulty: 'Sulit',
    question: 'Jika seek time = 5 ms, rotational latency = 4 ms, dan transfer time = 1 ms, berapa total disk access time?',
    options: [
      '5 ms',
      '9 ms',
      '10 ms',
      '11 ms'
    ],
    correct: 2,
    explanation: 'Total Access Time = Seek Time + Rotational Latency + Transfer Time = 5 ms + 4 ms + 1 ms = 10 ms. Tiga komponen waktu akses disk: (1) Seek time: head bergerak ke track yang tepat, (2) Rotational latency: menunggu sektor berputar ke bawah head, (3) Transfer time: data ditransfer dari disk ke buffer/RAM. Seek time biasanya komponen terbesar.'
  },
  {
    id: 69, module: 'storage', difficulty: 'Sulit',
    question: 'Apa perbedaan utama antara format partisi GPT (GUID Partition Table) dan MBR (Master Boot Record)?',
    options: [
      'GPT adalah format lama yang hanya mendukung disk kecil; MBR adalah format modern',
      'GPT mendukung disk >2TB dan hingga 128 partisi primer; MBR dibatasi 2TB dan hanya 4 partisi primer',
      'MBR lebih modern dan wajib digunakan pada sistem UEFI; GPT untuk BIOS legacy',
      'Tidak ada perbedaan signifikan antara GPT dan MBR dalam penggunaan modern'
    ],
    correct: 1,
    explanation: 'GPT (GUID Partition Table) mendukung: disk hingga 9.4 ZB (zettabyte), hingga 128 partisi primer, redundant partition table (cadangan di akhir disk), dan wajib untuk sistem UEFI. MBR (Master Boot Record) dibatasi: disk maksimal 2 TB, maksimal 4 partisi primer (atau 3 primer + 1 extended dengan multiple logical), dan digunakan dengan BIOS legacy. GPT adalah standar modern.'
  },
  {
    id: 70, module: 'storage', difficulty: 'Sulit',
    question: 'Dalam output `sudo smartctl -a /dev/sda`, apa arti dari baris "Rotation Rate: Solid State Device"?',
    options: [
      'Disk memiliki kecepatan rotasi yang sangat tinggi dan stabil (solid)',
      'Device adalah SSD — tidak memiliki komponen mekanis berputar (no platter)',
      'Disk sedang beroperasi dalam "solid mode" dengan kecepatan penuh',
      'Kecepatan rotasi disk tidak dapat terdeteksi oleh smartctl'
    ],
    correct: 1,
    explanation: '"Rotation Rate: Solid State Device" dalam output smartctl mengonfirmasi bahwa device adalah SSD (Solid State Drive). SSD tidak memiliki platter berputar atau read/write head mekanis — data diakses langsung dari chip NAND flash secara elektronik. HDD biasanya menampilkan nilai RPM spesifik seperti "Rotation Rate: 7200 rpm" atau "Rotation Rate: 5400 rpm".'
  },
  {
    id: 71, module: 'storage', difficulty: 'Sulit',
    question: 'Apa keuntungan menggunakan UUID dibanding nama device (`/dev/sda1`) dalam file `/etc/fstab`?',
    options: [
      'UUID lebih mudah diingat dan diketik oleh administrator sistem',
      'UUID bersifat persisten dan unik — tidak berubah meski nama device berubah akibat penambahan/pemindahan disk',
      'UUID memberikan keamanan lebih tinggi dengan enkripsi nama filesystem',
      'UUID memungkinkan sistem boot lebih cepat karena tidak perlu mencari device'
    ],
    correct: 1,
    explanation: 'UUID (Universally Unique Identifier) adalah identifier unik untuk setiap filesystem yang tidak berubah sepanjang hidupnya. Jika menggunakan nama device seperti `/dev/sda1`, nama ini bisa berubah ketika disk baru ditambahkan (misalnya `/dev/sdb1` jadi `/dev/sdc1`). Dengan UUID di `/etc/fstab`, OS selalu me-mount filesystem yang tepat terlepas dari perubahan urutan atau nama device.'
  },
  {
    id: 72, module: 'storage', difficulty: 'Sulit',
    question: 'Dalam output `iostat -dx`, nilai `%util = 95%` pada sebuah disk mengindikasikan...',
    options: [
      'Disk berada dalam kondisi performa optimal dan hampir semua kapasitas dimanfaatkan dengan baik',
      'Disk hampir selalu sibuk melayani request I/O — potensial bottleneck performa sistem',
      'Disk memiliki 95% ruang penyimpanan yang masih kosong dan tersedia',
      '95% dari semua request I/O berhasil ditransfer tanpa error'
    ],
    correct: 1,
    explanation: 'Kolom `%util` menunjukkan persentase waktu disk sedang aktif melayani request I/O. Interpretasi umum: <50% = aman, 50-80% = mulai sibuk, >90% = bottleneck/saturasi. Nilai 95% mengindikasikan disk hampir tidak pernah idle — selalu ada request yang menunggu. Ini menjadi bottleneck performa yang menurunkan responsivitas seluruh sistem, terutama aplikasi yang I/O-intensive.'
  },
  {
    id: 73, module: 'storage', difficulty: 'Sulit',
    question: 'Apa keuntungan utama LVM (Logical Volume Manager) dibanding penggunaan partisi disk konvensional?',
    options: [
      'LVM memberikan kecepatan baca/tulis yang secara konsisten lebih tinggi dari partisi biasa',
      'LVM memungkinkan pengubahan ukuran volume secara dinamis, volume bisa menjangkau beberapa disk fisik, dan mendukung snapshot tanpa downtime',
      'LVM memberikan perlindungan data lebih baik karena secara otomatis membuat backup',
      'LVM memiliki kompatibilitas lebih baik dengan sistem operasi Windows dan macOS'
    ],
    correct: 1,
    explanation: 'Keunggulan LVM: (1) Volume bisa diperbesar atau diperkecil secara DINAMIS tanpa memformat ulang atau memindahkan data, (2) Logical volume bisa menjangkau lebih dari satu disk fisik (volume group), (3) Mudah membuat snapshot filesystem untuk backup konsisten, (4) Manajemen storage lebih fleksibel — tambah disk baru tanpa reboot. Partisi konvensional sangat terbatas dalam hal perubahan ukuran.'
  },
  {
    id: 74, module: 'storage', difficulty: 'Sulit',
    question: 'Perintah `pvdisplay`, `vgdisplay`, dan `lvdisplay` terkait dengan manajemen apa di Linux?',
    options: [
      'Manajemen partisi konvensional menggunakan fdisk atau parted',
      'LVM (Logical Volume Manager) — menampilkan Physical Volume, Volume Group, dan Logical Volume',
      'Manajemen RAID berbasis software menggunakan mdadm',
      'Manajemen filesystem untuk repair dan pengecekan integritas'
    ],
    correct: 1,
    explanation: 'Ketiga perintah ini adalah tool manajemen LVM: `pvdisplay` = menampilkan Physical Volume (PV — disk atau partisi fisik yang menjadi anggota LVM), `vgdisplay` = menampilkan Volume Group (VG — kumpulan dari beberapa PV yang digabungkan), `lvdisplay` = menampilkan Logical Volume (LV — partisi virtual yang dibuat dari ruang VG dan dapat digunakan langsung oleh filesystem).'
  },
  {
    id: 75, module: 'storage', difficulty: 'Sulit',
    question: 'Apa perbedaan utama RAID 5 dan RAID 10 dari sisi fault tolerance dan efisiensi kapasitas?',
    options: [
      'RAID 5 lebih cepat dari RAID 10 dan bisa mentolerir lebih banyak kegagalan disk',
      'RAID 5 bisa tolerir 1 disk gagal dengan efisiensi (n-1)/n; RAID 10 bisa tolerir lebih banyak kegagalan (per pasangan mirror) dengan efisiensi hanya 50%',
      'Keduanya memiliki fault tolerance dan efisiensi kapasitas yang identik',
      'RAID 10 tidak menyediakan fault tolerance; RAID 5 menyediakan redundancy penuh'
    ],
    correct: 1,
    explanation: 'RAID 5: tolerir kegagalan 1 disk, efisiensi kapasitas = (n-1)/n (misal 4 disk = 75% kapasitas efektif), performa tulis lebih lambat (kalkulasi parity). RAID 10 (1+0 = mirror+stripe): tolerir beberapa kegagalan disk SELAMA tidak keduanya dari pasangan mirror yang sama, efisiensi hanya 50% (setengah kapasitas untuk mirror), performa tulis lebih baik. RAID 10 lebih cepat dan reliable, tapi lebih mahal.'
  },
  {
    id: 76, module: 'storage', difficulty: 'Sulit',
    question: 'Mengapa SSD tidak memiliki seek time dan rotational latency seperti HDD?',
    options: [
      'SSD berputar jauh lebih cepat dari HDD sehingga waktu tunggu mendekati nol',
      'SSD menggunakan chip memori flash tanpa komponen mekanis bergerak — data diakses secara elektronik langsung ke sel memori',
      'SSD menggunakan algoritma scheduling yang sangat efisien sehingga mengeliminasi keterlambatan',
      'SSD memiliki buffer cache yang sangat besar sehingga data selalu tersedia di cache'
    ],
    correct: 1,
    explanation: 'Seek time dan rotational latency adalah konsep yang HANYA berlaku untuk HDD karena adanya komponen mekanis: head harus bergerak ke track (seek) dan platter harus berputar hingga sektor yang tepat di bawah head (rotational latency). SSD menggunakan chip NAND flash — tidak ada head, tidak ada platter berputar. Data diakses langsung secara elektronik ke sel memori, sehingga latency SSD jauh lebih kecil dan konsisten.'
  },
  {
    id: 77, module: 'storage', difficulty: 'Sulit',
    question: 'Sebuah disk memiliki seek rate 1 ms per track. Jika head awal berada di track 20 dan harus memindahkan diri ke track 90, berapa seek time-nya?',
    options: [
      '20 ms',
      '90 ms',
      '70 ms',
      '110 ms'
    ],
    correct: 2,
    explanation: 'Seek Time = Jumlah track yang dilewati × Waktu per track = |90 - 20| × 1 ms/track = 70 × 1 ms = 70 ms. Jumlah track yang harus dilalui head adalah selisih absolut antara posisi awal dan posisi tujuan: |90 - 20| = 70 track. Dengan seek rate 1 ms per track, total seek time = 70 ms.'
  },
  {
    id: 78, module: 'storage', difficulty: 'Sulit',
    question: 'Dalam output `lsblk`, kolom TYPE menampilkan nilai "rom" untuk sebuah device. Apa artinya?',
    options: [
      'Device tersebut adalah partisi Read-Only Memory yang diproteksi sistem',
      'Device tersebut adalah optical drive (CD/DVD/Blu-ray ROM)',
      'Device tersebut adalah Remote Object Mount — storage yang diakses melalui jaringan',
      'Device tersebut adalah backup Read-Only Mount dari filesystem utama'
    ],
    correct: 1,
    explanation: 'Dalam output `lsblk`, nilai TYPE "rom" menunjukkan optical drive (CD/DVD/Blu-ray ROM drive). Contoh dari slide: `sr0 11:0 1 1024M 0 rom` menunjukkan optical drive berkapasitas 1 GB. Nilai TYPE lainnya yang umum: "disk" (HDD/SSD utuh), "part" (partisi), "lvm" (logical volume LVM), "raid1" (RAID array software).'
  },
  {
    id: 79, module: 'storage', difficulty: 'Sulit',
    question: 'Perintah `sudo hdparm -Tt /dev/sdX` digunakan untuk...',
    options: [
      'Menghapus data dari disk secara aman (secure erase)',
      'Melakukan benchmark untuk mengukur kecepatan baca disk: throughput cache (-T) dan throughput langsung dari disk (-t)',
      'Mengatur parameter advanced hardware disk seperti write caching dan read-ahead',
      'Menampilkan informasi S.M.A.R.T. lengkap termasuk suhu dan jam operasi disk'
    ],
    correct: 1,
    explanation: '`sudo hdparm -Tt /dev/sdX` melakukan benchmark kecepatan baca: `-T` = Timing buffered disk reads (mengukur kecepatan membaca dari cache/buffer — biasanya sangat cepat karena dari RAM), `-t` = Timing device reads (mengukur kecepatan membaca langsung dari disk). Hasil dalam MB/s. Berguna untuk membandingkan performa disk sebelum dan sesudah konfigurasi perubahan.'
  },
  {
    id: 80, module: 'storage', difficulty: 'Sulit',
    question: 'Apa dampak negatif utama dari konfigurasi RAID 0 dari sisi keandalan data?',
    options: [
      'Kecepatan baca/tulis menjadi lebih lambat dari menggunakan satu disk tunggal',
      'Tidak ada redundancy sama sekali — kegagalan SATU disk akan menyebabkan SEMUA data di seluruh array hilang',
      'Kapasitas total efektif lebih kecil dari kapasitas satu disk tunggal',
      'RAID 0 tidak kompatibel dengan filesystem modern seperti ext4 atau btrfs'
    ],
    correct: 1,
    explanation: 'RAID 0 mendistribusikan data (striping) ke semua disk tanpa redundancy. Akibatnya: jika SATU disk saja mengalami kegagalan, data yang ter-stripe di disk tersebut tidak bisa direcovery, membuat SEMUA data di array menjadi tidak dapat diakses. Probabilitas kegagalan RAID 0 = 1 - (1 - failure_rate)^n. Semakin banyak disk, semakin tinggi risiko kehilangan data keseluruhan.'
  },

  // ============================================================
  // MODUL 3: USER MANAGEMENT (40 SOAL)
  // ============================================================

  // --- MUDAH (10 soal) ---
  {
    id: 81, module: 'user', difficulty: 'Mudah',
    question: 'Apa yang dimaksud dengan "sistem multi-user" pada Linux?',
    options: [
      'Sistem yang hanya mengizinkan satu user login pada satu waktu bersamaan',
      'Sistem operasi yang memungkinkan banyak pengguna menggunakan sumber daya sistem secara bersamaan',
      'Sistem yang membutuhkan beberapa administrator untuk mengelolanya',
      'Sistem yang mampu menjalankan banyak aplikasi sekaligus dalam satu sesi user'
    ],
    correct: 1,
    explanation: 'Linux adalah sistem operasi multi-user yang dirancang untuk memungkinkan banyak pengguna menggunakan sistem secara bersamaan, baik secara fisik maupun remote (misalnya via SSH). Setiap user memiliki identitas unik (username, UID, GID), ruang kerja terisolasi (home directory), dan izin akses yang dapat dikonfigurasi secara terpisah.'
  },
  {
    id: 82, module: 'user', difficulty: 'Mudah',
    question: 'Perintah Linux yang digunakan untuk menampilkan username yang sedang aktif login saat ini adalah...',
    options: [
      'username',
      'whoami',
      'who -current',
      'getlogin --me'
    ],
    correct: 1,
    explanation: 'Perintah `whoami` (who am I) menampilkan nama username dari user yang sedang aktif menjalankan perintah tersebut. Outputnya sangat singkat, hanya satu baris berisi nama username. Berbeda dengan perintah `who` yang menampilkan daftar semua user yang sedang login ke sistem.'
  },
  {
    id: 83, module: 'user', difficulty: 'Mudah',
    question: 'UID dalam sistem Linux adalah singkatan dari...',
    options: [
      'User Interface Display — nomor untuk identifikasi tampilan antarmuka',
      'User ID — nomor identifikasi unik numerik yang dimiliki setiap user di sistem',
      'Unix Installation Descriptor — kode yang digunakan saat instalasi sistem',
      'User Input Device — identifikasi untuk perangkat input yang digunakan user'
    ],
    correct: 1,
    explanation: 'UID (User ID) adalah nomor identifikasi unik yang dimiliki setiap user di Linux. Pembagian UID: UID 0 = root (superuser dengan kekuasaan penuh), UID 1-999 = system users (untuk service/daemon sistem), UID 1000+ = user reguler/manusia. Kernel Linux menggunakan UID (bukan username) sebagai dasar dalam setiap permission check.'
  },
  {
    id: 84, module: 'user', difficulty: 'Mudah',
    question: 'GID dalam sistem Linux adalah singkatan dari...',
    options: [
      'Global Interface Driver — driver untuk antarmuka global sistem',
      'Group ID — nomor identifikasi unik numerik yang dimiliki setiap grup di sistem',
      'General Installation Data — data yang diperlukan untuk instalasi software',
      'Graphics Interface Device — identifikasi perangkat grafis yang digunakan sistem'
    ],
    correct: 1,
    explanation: 'GID (Group ID) adalah nomor identifikasi unik yang dimiliki setiap grup di Linux. Setiap user memiliki satu primary group (GID utama yang tertulis di `/etc/passwd`) dan dapat menjadi anggota beberapa secondary group. GID digunakan dalam permission check — ketika sistem memeriksa apakah user boleh mengakses file berdasarkan kepemilikan grup.'
  },
  {
    id: 85, module: 'user', difficulty: 'Mudah',
    question: 'File Linux yang menyimpan informasi dasar setiap user (username, UID, GID, home dir, shell) adalah...',
    options: [
      '/etc/users',
      '/etc/passwd',
      '/etc/userdata',
      '/etc/accounts'
    ],
    correct: 1,
    explanation: '`/etc/passwd` menyimpan informasi dasar setiap user dalam 7 field: username:password_placeholder:UID:GID:GECOS:home_directory:login_shell. Contoh: `mahasiswa1:x:1001:1001:Mahasiswa Praktikum:/home/mahasiswa1:/bin/bash`. File ini bisa dibaca oleh semua user (world-readable), namun hanya bisa dimodifikasi oleh root.'
  },
  {
    id: 86, module: 'user', difficulty: 'Mudah',
    question: 'File Linux yang menyimpan hash password user secara terenkripsi adalah...',
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/security/passwords',
      '/etc/password.hash'
    ],
    correct: 1,
    explanation: '`/etc/shadow` menyimpan hash password user dalam format terenkripsi (bukan plaintext). File ini hanya bisa dibaca oleh root — berbeda dengan `/etc/passwd` yang bisa dibaca semua user. Pemisahan ini adalah langkah keamanan penting: mencegah user biasa mengakses hash password dan melakukan brute-force atau dictionary attack.'
  },
  {
    id: 87, module: 'user', difficulty: 'Mudah',
    question: 'File Linux yang menyimpan informasi semua grup (nama grup, GID, anggota) adalah...',
    options: [
      '/etc/groups',
      '/etc/group',
      '/etc/groupdata',
      '/etc/usergroups'
    ],
    correct: 1,
    explanation: '`/etc/group` menyimpan informasi semua grup dalam format: `nama_grup:password:GID:anggota1,anggota2,...`. Contoh: `kelasA:x:1005:mahasiswa1,mahasiswa2,mahasiswa3`. Password grup biasanya berisi \'x\' (disimpan di `/etc/gshadow`). File ini digunakan OS untuk menentukan keanggotaan grup setiap user.'
  },
  {
    id: 88, module: 'user', difficulty: 'Mudah',
    question: 'Perintah `id` di Linux digunakan untuk menampilkan...',
    options: [
      'ID unik komputer dalam jaringan (machine ID)',
      'UID (user id), GID (primary group id), dan semua grup yang diikuti oleh user yang sedang login',
      'Daftar semua proses beserta ID (PID) masing-masing yang sedang berjalan',
      'Informasi identifikasi hardware sistem seperti CPU ID dan nomor seri'
    ],
    correct: 1,
    explanation: 'Perintah `id` menampilkan informasi identitas lengkap user saat ini: uid=1000(student), gid=1000(student), dan groups=1000(student),27(sudo),1001(kelasA). Output ini menunjukkan UID, nama user, primary GID, nama primary group, dan semua secondary group beserta GID dan nama masing-masing.'
  },
  {
    id: 89, module: 'user', difficulty: 'Mudah',
    question: 'Apa home directory default yang akan dibuat untuk user bernama "mahasiswa" di Linux?',
    options: [
      '/home/users/mahasiswa',
      '/home/mahasiswa',
      '/usr/mahasiswa',
      '/var/home/mahasiswa'
    ],
    correct: 1,
    explanation: 'Home directory default untuk user reguler di Linux adalah `/home/<username>`. Jadi untuk user "mahasiswa", home directory-nya adalah `/home/mahasiswa`. Home directory adalah direktori pribadi user yang menjadi working directory saat login, tempat menyimpan file personal, dan berisi file konfigurasi seperti `.bashrc`, `.profile`, dll.'
  },
  {
    id: 90, module: 'user', difficulty: 'Mudah',
    question: 'Perintah Linux yang digunakan untuk melihat daftar semua user yang sedang aktif login ke sistem saat ini adalah...',
    options: [
      'users-list --active',
      'who',
      'getlogins --all',
      'listusers --current'
    ],
    correct: 1,
    explanation: 'Perintah `who` menampilkan daftar semua user yang sedang login ke sistem, beserta informasi: nama user, terminal yang digunakan (pts/0, tty1, dll.), waktu login, dan IP address (untuk sesi remote/SSH). Perintah `w` memberikan informasi serupa namun lebih detail, termasuk aktivitas saat ini dan sistem load average.'
  },

  // --- SEDANG (15 soal) ---
  {
    id: 91, module: 'user', difficulty: 'Sedang',
    question: 'Perintah yang digunakan untuk membuat user baru secara interaktif (dengan prompt konfirmasi) di Linux adalah...',
    options: [
      'useradd mahasiswa (perintah ini sudah lengkap dan interaktif)',
      'newuser --interactive mahasiswa',
      'adduser mahasiswa (perintah high-level yang interaktif dengan wizard)',
      'createuser --prompt mahasiswa'
    ],
    correct: 2,
    explanation: '`adduser mahasiswa` adalah perintah high-level yang interaktif — ia akan memandu administrator melalui serangkaian prompt: isi password, Full Name, Room Number, Work Phone, dst. Perintah ini juga secara otomatis membuat home directory. Berbeda dengan `useradd` yang low-level dan memerlukan banyak flag eksplisit untuk konfigurasi lengkap.'
  },
  {
    id: 92, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo usermod -l student mahasiswa` digunakan untuk...',
    options: [
      'Menghapus user mahasiswa dari group bernama student',
      'Mengubah (rename) nama login user dari "mahasiswa" menjadi "student"',
      'Mengunci (lock) akun user mahasiswa agar tidak bisa login',
      'Menambahkan user mahasiswa ke group student sebagai secondary group'
    ],
    correct: 1,
    explanation: '`usermod -l <nama_baru> <nama_lama>` mengubah nama login (username) user. Perintah ini hanya mengubah field username, TIDAK otomatis mengubah home directory (`/home/mahasiswa` tetap). Untuk mengubah home directory sekaligus, tambahkan flag `-d /home/student -m`. Verifikasi dengan `cat /etc/passwd | grep student`.'
  },
  {
    id: 93, module: 'user', difficulty: 'Sedang',
    question: 'Perintah yang benar untuk menghapus user beserta seluruh home directory-nya di Linux adalah...',
    options: [
      'sudo userdel mahasiswa (tanpa flag apapun)',
      'sudo userdel -r mahasiswa (flag -r untuk remove home directory)',
      'sudo deluser --remove-home mahasiswa',
      'sudo rm -rf /home/mahasiswa (hanya menghapus direktori, bukan akun)'
    ],
    correct: 1,
    explanation: '`sudo userdel -r mahasiswa` menghapus: (1) entri akun user dari `/etc/passwd`, `/etc/shadow`, dan `/etc/group`, (2) home directory user (`/home/mahasiswa`), dan (3) mail spool user. Tanpa flag `-r`, `userdel` hanya menghapus akun tetapi meninggalkan home directory. Penting: pastikan user tidak sedang login sebelum menghapus akun.'
  },
  {
    id: 94, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo groupadd kelasA` digunakan untuk...',
    options: [
      'Menambahkan user saat ini ke group yang sudah ada bernama kelasA',
      'Membuat group baru bernama "kelasA" di sistem Linux',
      'Menghapus group yang bernama kelasA dari sistem',
      'Menampilkan daftar anggota group kelasA yang ada di sistem'
    ],
    correct: 1,
    explanation: '`groupadd <nama_grup>` membuat grup baru. GID akan ditetapkan otomatis (nilai berikutnya yang tersedia) atau bisa ditentukan dengan flag `-g <GID>`. Setelah grup dibuat, user bisa ditambahkan menggunakan `usermod -aG kelasA mahasiswa`. Verifikasi grup dengan `cat /etc/group | grep kelasA`.'
  },
  {
    id: 95, module: 'user', difficulty: 'Sedang',
    question: 'Perintah yang benar untuk menambahkan user "mahasiswa" ke group "kelasA" TANPA menghapus keanggotaan grup lain yang dimiliki user tersebut adalah...',
    options: [
      'sudo usermod -G kelasA mahasiswa (tanpa flag -a, ini akan mengganti semua grup)',
      'sudo usermod -aG kelasA mahasiswa (flag -a = append, menambahkan tanpa menghapus)',
      'sudo groupadd mahasiswa kelasA (urutan argumen salah)',
      'sudo gpasswd kelasA mahasiswa (format perintah salah)'
    ],
    correct: 1,
    explanation: '`sudo usermod -aG kelasA mahasiswa` menambahkan user ke grup tambahan (secondary group). KRITIS: flag `-a` (append) HARUS digunakan bersama `-G`. Tanpa `-a`, penggunaan `-G` saja akan MENGGANTI semua secondary group user dengan hanya grup yang disebutkan — user akan kehilangan keanggotaan di semua grup lainnya. Selalu gunakan `-aG` untuk menambah grup.'
  },
  {
    id: 96, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `chmod 777 data.txt` mengubah permission file menjadi...',
    options: [
      'Read only untuk semua (owner, group, dan other)',
      'Read, Write, Execute untuk semua kategori (owner, group, dan other) — permission paling permisif',
      'Read dan Write untuk owner saja; Read untuk group dan other',
      'Tidak ada akses sama sekali untuk siapapun (permission terkunci)'
    ],
    correct: 1,
    explanation: 'Chmod 777 memberikan: owner = 7 (4+2+1 = r+w+x), group = 7 (r+w+x), other = 7 (r+w+x). Dalam notasi simbolik: `-rwxrwxrwx`. Ini adalah permission paling permisif dimana SEMUA orang bisa membaca, menulis, dan menjalankan file. Sangat berbahaya untuk file konfigurasi atau script penting — hindari penggunaan 777 kecuali benar-benar diperlukan.'
  },
  {
    id: 97, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo chown mahasiswa2 data.txt` digunakan untuk...',
    options: [
      'Mengubah permission file data.txt agar hanya bisa diakses oleh mahasiswa2',
      'Mengubah PEMILIK (owner) file data.txt menjadi user mahasiswa2',
      'Menambahkan mahasiswa2 sebagai pembaca tambahan file data.txt',
      'Membuat salinan file data.txt di home directory mahasiswa2'
    ],
    correct: 1,
    explanation: '`chown` (change owner) mengubah kepemilikan file. `sudo chown mahasiswa2 data.txt` mengubah owner file `data.txt` menjadi user `mahasiswa2`. Untuk mengubah owner DAN group sekaligus: `chown mahasiswa2:kelasA data.txt`. Untuk mengubah secara rekursif dalam direktori: `chown -R mahasiswa2 /path/to/dir`. Membutuhkan sudo kecuali dilakukan oleh pemilik file saat ini.'
  },
  {
    id: 98, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo chgrp kelasA data.txt` digunakan untuk...',
    options: [
      'Membuat group baru bernama kelasA dan mengaitkannya dengan data.txt',
      'Mengubah GROUP OWNER file data.txt menjadi group kelasA',
      'Menambahkan semua anggota kelasA sebagai pembaca file data.txt',
      'Menghapus file data.txt dari kepemilikan group kelasA'
    ],
    correct: 1,
    explanation: '`chgrp` (change group) mengubah group owner file. `sudo chgrp kelasA data.txt` mengubah group owner file `data.txt` menjadi `kelasA`. Ini mempengaruhi permission berdasarkan group pada file tersebut — anggota group kelasA akan mendapatkan permission group yang dikonfigurasi pada file. Alternatif: `chown :kelasA data.txt` (mengubah hanya group menggunakan chown).'
  },
  {
    id: 99, module: 'user', difficulty: 'Sedang',
    question: 'Permission file `-rw-r--r--` dalam notasi oktal adalah...',
    options: [
      '777',
      '755',
      '644',
      '600'
    ],
    correct: 2,
    explanation: 'Parsing `-rw-r--r--`: tanda `-` pertama = file reguler (bukan direktori). Owner = `rw-` (read=4, write=2, execute=0, total=6). Group = `r--` (read=4, write=0, execute=0, total=4). Other = `r--` (total=4). Notasi oktal = 644. Permission 644 adalah standar untuk file dokumen/teks: owner bisa baca dan tulis, group dan other hanya bisa membaca.'
  },
  {
    id: 100, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo passwd -l mahasiswa2` digunakan untuk...',
    options: [
      'Mengubah (ganti) password user mahasiswa2 dengan password baru',
      'Mengunci (LOCK) akun user mahasiswa2 sehingga tidak bisa login',
      'Menghapus password user mahasiswa2 (akun tanpa password)',
      'Menampilkan status dan informasi password user mahasiswa2'
    ],
    correct: 1,
    explanation: '`passwd -l <username>` mengunci (lock) akun user. Ketika dikunci, user tidak bisa login meskipun memasukkan password yang benar. Secara teknis, tanda `!` ditambahkan di awal hash password di `/etc/shadow` (`!$6$hash` bukannya `$6$hash`), membuat hash tidak valid. Untuk membuka kunci: `sudo passwd -u mahasiswa2`.'
  },
  {
    id: 101, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo passwd -u mahasiswa2` digunakan untuk...',
    options: [
      'Mengubah (update) password user mahasiswa2 dengan password baru',
      'Membuka kunci (UNLOCK) akun user mahasiswa2 yang sebelumnya dikunci',
      'Menghapus username mahasiswa2 dari database user sistem',
      'Mengubah UID (User ID) numerik dari user mahasiswa2'
    ],
    correct: 1,
    explanation: '`passwd -u <username>` membuka kunci (unlock) akun yang sebelumnya dikunci dengan `passwd -l`. Ini menghapus tanda `!` dari awal hash password di `/etc/shadow`, sehingga hash menjadi valid kembali dan user bisa login. Verifikasi status kunci: `sudo grep mahasiswa2 /etc/shadow` — tidak ada `!` di awal hash berarti akun aktif.'
  },
  {
    id: 102, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo chage -M 30 mahasiswa2` berarti...',
    options: [
      'Mengubah umur akun mahasiswa2 menjadi 30 hari sejak pembuatan',
      'Mewajibkan user mahasiswa2 untuk mengganti password setiap maksimal 30 hari',
      'Mengunci akun mahasiswa2 setelah 30 kali percobaan login yang gagal',
      'Mengatur masa berlaku akun mahasiswa2 selama tepat 30 hari dari sekarang'
    ],
    correct: 1,
    explanation: '`chage -M <jumlah_hari> <username>` mengatur maximum password age (umur maksimum password). `chage -M 30 mahasiswa2` berarti password user mahasiswa2 harus diganti setidaknya setiap 30 hari. Jika melewati 30 hari tanpa mengganti password, user akan dipaksa mengganti password saat login berikutnya. `chage -l mahasiswa2` untuk melihat semua pengaturan.'
  },
  {
    id: 103, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `last` di Linux digunakan untuk...',
    options: [
      'Menampilkan file yang terakhir kali dimodifikasi di sistem',
      'Menampilkan riwayat login user dan reboot sistem dari file `/var/log/wtmp`',
      'Menjalankan kembali perintah terakhir yang dieksekusi di terminal',
      'Menampilkan proses yang paling terakhir dijalankan di sistem'
    ],
    correct: 1,
    explanation: 'Perintah `last` menampilkan riwayat login dari `/var/log/wtmp`, menampilkan: username, terminal (tty/pts), IP/hostname (untuk login remote), waktu mulai, waktu selesai, dan durasi sesi. Juga menampilkan entri "reboot" untuk waktu reboot sistem. `lastlog` menampilkan informasi login terakhir untuk setiap user yang ada di sistem.'
  },
  {
    id: 104, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `sudo usermod -aG sudo mahasiswa2` digunakan untuk...',
    options: [
      'Mengubah nama user mahasiswa2 menjadi "sudo"',
      'Menambahkan user mahasiswa2 ke group "sudo" sehingga mendapatkan hak akses sudo',
      'Menghapus (revoke) hak akses sudo dari user mahasiswa2',
      'Membuat user baru bernama mahasiswa2 dengan hak sudo secara langsung'
    ],
    correct: 1,
    explanation: '`usermod -aG sudo mahasiswa2` menambahkan mahasiswa2 ke group "sudo". Di Ubuntu/Debian, anggota group "sudo" dapat menggunakan perintah `sudo` untuk menjalankan perintah dengan hak root. Setelah ditambahkan ke group sudo, user HARUS logout dan login kembali agar perubahan keanggotaan grup efektif. Verifikasi: `groups mahasiswa2`.'
  },
  {
    id: 105, module: 'user', difficulty: 'Sedang',
    question: 'Perintah `su - mahasiswa` digunakan untuk...',
    options: [
      'Menghapus dan menonaktifkan akun user mahasiswa dari sistem',
      'Beralih (switch user) ke akun user mahasiswa dengan environment login penuh (seperti login baru)',
      'Menampilkan informasi detail tentang user mahasiswa',
      'Membuat symbolic link dari direktori aktif ke home directory mahasiswa'
    ],
    correct: 1,
    explanation: '`su - <username>` beralih ke user lain dengan full login environment: working directory berubah ke home directory user tersebut, dan variabel environment (PATH, HOME, dll.) dimuat ulang sesuai profil user tersebut. Tanda `-` (atau `--login`) penting untuk mendapatkan environment yang bersih. Tanpa `-`, shell baru dibuka tapi environment user sebelumnya masih digunakan.'
  },

  // --- SULIT (15 soal) ---
  {
    id: 106, module: 'user', difficulty: 'Sulit',
    question: 'Format baris yang benar dalam file `/etc/passwd` dengan urutan field yang tepat adalah...',
    options: [
      'username:UID:GID:home_dir:shell:password_hash',
      'username:password_placeholder:UID:GID:GECOS:home_dir:login_shell',
      'UID:username:password_hash:GID:home_dir:login_shell',
      'username:GID:UID:password_hash:login_shell:home_dir'
    ],
    correct: 1,
    explanation: 'Setiap baris `/etc/passwd` terdiri dari 7 field dipisahkan titik dua (:): (1) username, (2) password — biasanya "x" (hash ada di /etc/shadow), (3) UID, (4) GID primary group, (5) GECOS — informasi tambahan seperti nama lengkap, (6) home directory, (7) login shell. Contoh: `mahasiswa1:x:1001:1001:Mahasiswa Praktikum:/home/mahasiswa1:/bin/bash`'
  },
  {
    id: 107, module: 'user', difficulty: 'Sulit',
    question: 'Mengapa Linux memisahkan informasi user di `/etc/passwd` dan password hash di `/etc/shadow`?',
    options: [
      'Untuk efisiensi penyimpanan karena hash password berukuran besar dan perlu file terpisah',
      'Untuk keamanan: `/etc/passwd` perlu world-readable untuk fungsi sistem, tapi hash password di `/etc/shadow` hanya boleh dibaca oleh root untuk mencegah serangan offline cracking',
      'Karena format field kedua file tersebut tidak kompatibel satu sama lain',
      'Karena `/etc/passwd` sudah penuh kapasitasnya sehingga data password dipindah ke file lain'
    ],
    correct: 1,
    explanation: 'Ini adalah langkah keamanan kritis ("shadow password"). `/etc/passwd` harus bisa dibaca semua user karena banyak program sistem membutuhkan pemetaan UID↔username. Namun jika hash password ada di sana, user biasa bisa mengunduhnya dan melakukan brute-force attack offline. Solusinya: hash password dipindah ke `/etc/shadow` yang permission-nya hanya bisa dibaca root (640 atau 000).'
  },
  {
    id: 108, module: 'user', difficulty: 'Sulit',
    question: 'Apa perbedaan mendasar antara perintah `su` dan `sudo` dalam manajemen akses di Linux?',
    options: [
      'Tidak ada perbedaan mendasar; keduanya melakukan hal yang persis sama',
      '`su` berganti ke user lain membutuhkan password USER TUJUAN; `sudo` menjalankan satu perintah sebagai root menggunakan password USER SENDIRI dan tercatat di log',
      '`sudo` adalah versi modern yang lebih canggih dari `su` dan menggantikan `su` sepenuhnya',
      '`su` lebih aman karena menggunakan enkripsi tambahan, sedangkan `sudo` tidak mengenkripsi perintah'
    ],
    correct: 1,
    explanation: '`su <user>` = switch user, membuka shell baru sebagai user tersebut, membutuhkan PASSWORD USER TUJUAN (atau password root untuk `su -`). `sudo <perintah>` = menjalankan SATU perintah spesifik sebagai root, menggunakan PASSWORD USER SENDIRI, konfigurasi di `/etc/sudoers`, dan DICATAT di log (`/var/log/auth.log`). `sudo` lebih aman: akses granular, tercatat, tidak perlu share password root.'
  },
  {
    id: 109, module: 'user', difficulty: 'Sulit',
    question: 'Apa yang dimaksud dengan prinsip "least privilege" (hak akses minimum) dalam administrasi sistem Linux?',
    options: [
      'Memberikan hak akses root kepada semua user agar lebih produktif dan tidak perlu meminta bantuan admin',
      'Memberikan user/proses/program HANYA hak akses yang benar-benar minimum yang diperlukan untuk menjalankan tugasnya — tidak lebih',
      'Membatasi akses login hanya untuk administrator senior yang berpengalaman',
      'Menggunakan password yang pendek dan mudah diingat untuk memudahkan autentikasi'
    ],
    correct: 1,
    explanation: 'Prinsip least privilege menyatakan setiap entitas (user, proses, program) hanya boleh memiliki hak akses MINIMUM yang diperlukan untuk tugasnya. Mengapa penting: (1) Meminimalkan dampak kerusakan jika akun dikompromi, (2) Mencegah penyalahgunaan yang disengaja, (3) Membatasi propagasi malware. Contoh: web server tidak perlu hak root, user biasa tidak perlu sudo, proses backup hanya perlu akses read.'
  },
  {
    id: 110, module: 'user', difficulty: 'Sulit',
    question: 'Apa risiko keamanan dari memberikan permission 777 pada file konfigurasi atau script penting sistem?',
    options: [
      'File akan berjalan lebih lambat karena terlalu banyak permission yang harus diperiksa',
      'SEMUA user (termasuk user jahat) dapat membaca, memodifikasi, dan menjalankan file — risiko injeksi kode berbahaya dan kebocoran data sensitif sangat tinggi',
      'File secara otomatis menjadi read-only untuk mencegah modifikasi tidak sah',
      'Hanya administrator yang bisa mengakses file tersebut karena permission 777 diinterpretasikan berbeda'
    ],
    correct: 1,
    explanation: 'Permission 777 memberikan READ+WRITE+EXECUTE kepada SEMUA orang. Risiko konkret: (1) User jahat bisa MENGUBAH ISI script/konfigurasi untuk menyisipkan kode berbahaya, (2) User bisa MEMBACA data sensitif dalam file konfigurasi (password database, API key, dll.), (3) Script yang dimodifikasi bisa dieksekusi untuk eskalasi privilege. Prinsip: berikan permission seminimum mungkin (contoh 644 untuk konfigurasi, 755 untuk script).'
  },
  {
    id: 111, module: 'user', difficulty: 'Sulit',
    question: 'Perintah `sudo chage -E 2026-12-31 mahasiswa2` berarti...',
    options: [
      'Password user mahasiswa2 akan expire (kadaluarsa) pada tanggal 31 Desember 2026',
      'AKUN user mahasiswa2 akan kadaluarsa dan tidak bisa digunakan untuk login setelah tanggal 31 Desember 2026',
      'mahasiswa2 harus mengganti password setiap 2026 hari dari sekarang',
      'Akun mahasiswa2 dibuat dengan tanggal efektif (mulai berlaku) 31 Desember 2026'
    ],
    correct: 1,
    explanation: '`chage -E <tanggal> <username>` mengatur tanggal kadaluarsa AKUN (account expiry date — bukan password expiry). Setelah 31 Desember 2026, akun mahasiswa2 akan dinonaktifkan dan tidak bisa digunakan untuk login, meskipun password masih valid. Berguna untuk akun dengan masa berlaku terbatas (akun mahasiswa semester genap, akun kontraktor, dll.). Verifikasi: `chage -l mahasiswa2`.'
  },
  {
    id: 112, module: 'user', difficulty: 'Sulit',
    question: 'Apa yang terjadi secara teknis jika akun user dikunci menggunakan `passwd -l` dan user tersebut mencoba login?',
    options: [
      'User masih bisa login menggunakan password lama yang masih tersimpan di sistem',
      'Sistem menolak autentikasi karena tanda `!` di awal hash password di `/etc/shadow` membuat hash tidak valid — login gagal meskipun password benar',
      'Akun dihapus secara otomatis dari sistem setelah beberapa kali percobaan login yang gagal',
      'User dialihkan secara otomatis ke akun guest dengan hak akses yang sangat terbatas'
    ],
    correct: 1,
    explanation: 'Ketika `passwd -l mahasiswa2` dijalankan, field password di `/etc/shadow` dimodifikasi: tanda `!` ditambahkan di depan hash (`!$6$salt$hash...`). PAM (Pluggable Authentication Modules) yang menangani autentikasi akan mendeteksi `!` ini dan menolak semua usaha login, bahkan jika password yang dimasukkan benar. Akun masih ada di sistem, hanya akses login yang diblokir.'
  },
  {
    id: 113, module: 'user', difficulty: 'Sulit',
    question: 'Dalam file `/etc/passwd`, field ke-5 (GECOS field) berisi apa dan apa fungsinya?',
    options: [
      'Hash password dalam format yang lebih tua (sebelum ada /etc/shadow)',
      'Informasi komentar/deskripsi tambahan tentang user — biasanya nama lengkap, nomor ruangan, nomor telepon',
      'Daftar semua secondary group yang menjadi anggota user tersebut',
      'Path ke file konfigurasi khusus yang digunakan saat user login'
    ],
    correct: 1,
    explanation: 'GECOS (General Electric Comprehensive Operating System) field adalah field komentar/informasi tambahan tentang user, biasanya berisi nama lengkap user dan informasi kontak (nomor ruangan, telepon kantor, telepon rumah). Contoh: `mahasiswa1:x:1001:1001:Mahasiswa Praktikum 2025:/home/mahasiswa1:/bin/bash` — "Mahasiswa Praktikum 2025" adalah GECOS field. Perintah `finger <username>` menampilkan informasi ini.'
  },
  {
    id: 114, module: 'user', difficulty: 'Sulit',
    question: 'Apa fungsi krusial `visudo` dibanding mengedit `/etc/sudoers` langsung menggunakan editor teks biasa seperti nano atau vim?',
    options: [
      'Tidak ada perbedaan nyata; keduanya menghasilkan hasil yang identik',
      '`visudo` MEMVALIDASI SYNTAX file sudoers sebelum menyimpan — mencegah syntax error yang bisa mengunci semua akses sudo di seluruh sistem',
      '`visudo` memiliki antarmuka yang lebih ramah pengguna dan menampilkan bantuan syntax secara otomatis',
      '`visudo` otomatis membuat backup sebelum editing, sedangkan editor biasa tidak membuat backup'
    ],
    correct: 1,
    explanation: '`visudo` membuka `/etc/sudoers` dan yang PALING PENTING: ia memvalidasi syntax file SEBELUM menyimpan. Jika ada syntax error, `visudo` menolak menyimpan dan meminta perbaikan. Jika `/etc/sudoers` disimpan dengan syntax error menggunakan editor biasa, SEMUA perintah `sudo` di sistem akan gagal — seluruh sistem bisa tidak bisa dikelola tanpa akses fisik atau root langsung. Ini bisa menjadi bencana pada server production.'
  },
  {
    id: 115, module: 'user', difficulty: 'Sulit',
    question: 'Mengapa proses yang berjalan dengan UID 0 memiliki kekuasaan penuh (superuser) atas sistem Linux?',
    options: [
      'Karena UID 0 adalah user pertama yang dibuat saat instalasi dan secara konvensional mendapat akses penuh',
      'Karena kernel Linux secara hardcode memberikan bypass semua permission check untuk proses dengan UID 0 — ini adalah implementasi di level kode kernel, bukan konfigurasi',
      'Karena `/etc/passwd` mendaftarkan root sebagai administrator dan semua program menghormati pengaturan ini',
      'Karena user root memiliki alokasi RAM dan CPU yang lebih besar dari user biasa'
    ],
    correct: 1,
    explanation: 'Kekuasaan penuh UID 0 adalah keputusan DESAIN KERNEL yang di-hardcode: setiap kali kernel melakukan permission check untuk operasi apapun (buka file, bind port <1024, akses hardware, ubah sistem, dll.), kernel pertama memeriksa apakah UID proses = 0. Jika ya, semua check dilewati (bypassed) secara otomatis. Ini bukan konfigurasi di `/etc/passwd` — ini ada di kode sumber kernel Linux itu sendiri.'
  },
  {
    id: 116, module: 'user', difficulty: 'Sulit',
    question: 'Perintah `journalctl -xe` digunakan untuk...',
    options: [
      'Mengekspor seluruh log sistem ke format XML untuk keperluan arsip',
      'Menampilkan log sistem systemd terbaru dengan penjelasan kontekstual (explanations) dan melompat ke akhir log untuk troubleshooting cepat',
      'Menghapus log sistem yang sudah lama untuk menghemat ruang disk',
      'Memulai ulang (restart) service journald yang mengelola logging sistem'
    ],
    correct: 1,
    explanation: '`journalctl -xe` menampilkan log systemd journal untuk troubleshooting: `-x` = menampilkan pesan penjelasan tambahan (catalog message explanations) untuk entry error/warning, membantu memahami penyebab masalah; `-e` = melompat ke AKHIR (end) log sehingga entry terbaru langsung terlihat. Kombinasi ini sangat efektif untuk mendiagnosis masalah service atau sistem yang baru terjadi.'
  },
  {
    id: 117, module: 'user', difficulty: 'Sulit',
    question: 'Apa yang dimaksud dengan SUID (Set User ID) bit pada file executable di Linux?',
    options: [
      'File tersebut hanya bisa dieksekusi oleh superuser (root) atau anggota group sudo',
      'Ketika file dieksekusi, proses mendapatkan UID pemilik file (bukan UID user yang menjalankannya) — memungkinkan user biasa melakukan operasi terbatas yang memerlukan hak lebih tinggi',
      'File memiliki semua permission bit (rwxrwxrwx) diset secara penuh',
      'File adalah milik system user dan tidak bisa dimodifikasi oleh user reguler'
    ],
    correct: 1,
    explanation: 'SUID bit (Set User ID, chmod 4xxx): ketika user menjalankan file executable dengan SUID, proses BERJALAN DENGAN UID PEMILIK FILE, bukan UID user yang mengeksekusinya. Contoh klasik: `/usr/bin/passwd` dimiliki root dan memiliki SUID (chmod 4755). Ketika user biasa menjalankannya, proses passwd berjalan sebagai root — sehingga bisa memodifikasi `/etc/shadow` yang hanya bisa ditulis root, tapi dengan batasan logika internal passwd sendiri.'
  },
  {
    id: 118, module: 'user', difficulty: 'Sulit',
    question: 'Bagaimana cara mendeteksi apakah sebuah akun user sedang dalam status terkunci (locked) melalui file `/etc/shadow`?',
    options: [
      'UID user bernilai negatif atau di atas 65535 menandakan akun dikunci',
      'Field password (field ke-2) di `/etc/shadow` diawali dengan tanda seru (!) sebelum hash: `!$6$salt$hashvalue`',
      'File home directory user tidak dapat diakses meskipun ada di filesystem',
      'Nama user tidak muncul dalam output perintah `who` atau `w`'
    ],
    correct: 1,
    explanation: 'Di `/etc/shadow`, field ke-2 berisi hash password. Ketika akun dikunci dengan `passwd -l`, tanda `!` ditambahkan di AWAL hash: `mahasiswa2:!$6$salt$hashedpassword:19000:0:99999:7:::`. Tanda `!` ini membuat string tidak bisa dicocokkan dengan algoritma hashing manapun, sehingga autentikasi selalu gagal. Beberapa sistem juga menggunakan `!!` untuk akun yang belum pernah di-set password.'
  },
  {
    id: 119, module: 'user', difficulty: 'Sulit',
    question: 'Apa fungsi field ke-2 (password) dalam `/etc/passwd` yang biasanya berisi karakter "x"?',
    options: [
      'Menandakan bahwa user tersebut adalah superuser atau memiliki hak akses penuh',
      'Placeholder yang menunjukkan password hash sebenarnya tersimpan di `/etc/shadow` (shadow password scheme)',
      'Menandakan bahwa akun sudah kadaluarsa dan tidak bisa digunakan lagi',
      'Menyimpan password dalam format plaintext yang sudah diobfuskasi dengan karakter "x"'
    ],
    correct: 1,
    explanation: 'Karakter "x" di field password `/etc/passwd` adalah PLACEHOLDER dari shadow password scheme. Secara historis Unix menyimpan hash password langsung di `/etc/passwd`. Ketika shadow password diimplementasikan (untuk keamanan), hash dipindah ke `/etc/shadow` dan "x" digunakan sebagai penanda bahwa hash ada di shadow file. Jika "x" diganti dengan "*" atau "!", akun tidak bisa login melalui password (digunakan untuk system accounts).'
  },
  {
    id: 120, module: 'user', difficulty: 'Sulit',
    question: 'Perintah `systemctl list-units --type=service` digunakan untuk...',
    options: [
      'Memulai (start) semua service yang saat ini dalam status inactive atau failed',
      'Menampilkan daftar semua unit service systemd yang di-load beserta status LOAD, ACTIVE, SUB, dan deskripsinya',
      'Menghapus (uninstall) service yang sudah tidak digunakan dari sistem',
      'Menampilkan log output terbaru dari semua service yang sedang berjalan'
    ],
    correct: 1,
    explanation: '`systemctl list-units --type=service` menampilkan semua unit service systemd yang saat ini di-load oleh sistem. Kolom output: UNIT (nama.service), LOAD (apakah berhasil di-load: loaded/error), ACTIVE (active/inactive/failed), SUB (status detail: running/dead/exited/failed), dan DESCRIPTION. Berguna untuk mendapatkan gambaran umum semua service, menemukan service yang gagal, atau mencari service spesifik seperti SSH (`ssh.service`).'
  }

];

// ============================================================
// Fungsi Helper
// ============================================================

/** Mengambil semua soal untuk satu modul */
function getQuestionsByModule(module) {
  return QUESTIONS.filter(q => q.module === module);
}

/** Mengambil semua soal dari semua modul (dikombinasikan) */
function getAllQuestions() {
  // Urutkan: Mudah -> Sedang -> Sulit per modul, lalu digabung bersamaan
  const modules = ['memory', 'storage', 'user'];
  const difficulties = ['Mudah', 'Sedang', 'Sulit'];
  const combined = [];
  for (const diff of difficulties) {
    for (const mod of modules) {
      const qs = QUESTIONS.filter(q => q.module === mod && q.difficulty === diff);
      combined.push(...qs);
    }
  }
  return combined;
}

/** Metadata modul */
const MODULE_META = {
  memory: {
    id: 'memory',
    title: 'Manajemen Memori',
    subtitle: 'RAM, Paging, Virtual Memory, Swapping',
    icon: 'memory',
    color: 'primary',
    totalQuestions: 40,
  },
  storage: {
    id: 'storage',
    title: 'Mass Storage',
    subtitle: 'HDD/SSD, Partisi, Disk Scheduling, RAID',
    icon: 'storage',
    color: 'tertiary',
    totalQuestions: 40,
  },
  user: {
    id: 'user',
    title: 'User Management',
    subtitle: 'User, Group, Permission, Administrasi',
    icon: 'manage_accounts',
    color: 'secondary',
    totalQuestions: 40,
  },
  all: {
    id: 'all',
    title: 'Semua Topik',
    subtitle: 'Gabungan 120 soal dari semua modul',
    icon: 'quiz',
    color: 'primary',
    totalQuestions: 120,
  }
};
