(() => {
  "use strict";

  const translations = {
    en: {
      typed: [
        "Unity Game Developer",
        "Full Stack Web Developer",
        "React Native Expert",
        "C# & PHP Programmer"
      ],
      text: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-achievements": "Achievements",
        "nav-timeline": "Timeline",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-prefix": "I'm a",
        "about-title": "About Me",
        "about-subtitle": "A versatile Software Engineer capable of building immersive 3D worlds and robust web applications.",
        "about-intro": "As a final-year IT student, I define myself as a multi-disciplinary developer. I possess the logic to build complex backend systems in PHP/SQL and the creativity to craft engaging gameplay experiences in Unity/C#.",
        "about-label-birthday": "Birthday:",
        "about-label-github": "Github:",
        "about-label-phone": "Phone:",
        "about-label-city": "City:",
        "about-label-age": "Age:",
        "about-label-degree": "Degree:",
        "about-label-email": "Email:",
        "about-degree-value": "Final-year Student",
        "about-outro": "Whether it's optimizing a rendering pipeline for a game or designing a scalable REST API for a mobile app, I am committed to delivering high-performance and user-centric products.",
        "skills-title": "Technical Skills",
        "skills-subtitle": "My dual expertise in Game Development and Software Engineering",
        "skills-group-game": "Game Development",
        "skills-game-1": "Unity Engine (2D/3D)",
        "skills-game-2": "C# Programming",
        "skills-game-3": "Game Logic & Physics",
        "skills-group-web": "Web & App Stack",
        "skills-web-1": "React Native / JavaScript",
        "skills-web-2": "PHP & MySQL (Backend)",
        "skills-web-3": "Git / Firebase / Tools",
        "achievements-title": "Achievements",
        "achievements-subtitle": "Key milestones in my learning and competition journey",
        "ach-1-title": "3rd Prize - Best Web Design 2022",
        "ach-1-desc": "Won third place at Best Web Design 2022 with a practical and impactful web product.",
        "ach-2-title": "Most Impressive Website Award",
        "ach-2-desc": "Received the Most Impressive Website award at Best Web Design 2022.",
        "ach-3-title": "Encouragement Prize - Tetote Hackathon",
        "ach-3-desc": "Won an encouragement prize at Tetote Hackathon for creativity and teamwork.",
        "timeline-title": "Timeline",
        "timeline-subtitle": "A timeline of projects, activities, experience, and skills",
        "tl-1-title": "First Prize - Ha Long Youth Informatics Competition",
        "tl-1-desc": "Won first prize at the Ha Long specialized youth informatics competition.",
        "tl-2-title": "Second Prize - Town-level Informatics Competition",
        "tl-2-desc": "Won second prize in the town-level informatics competition.",
        "tl-3-title": "Started at VKU",
        "tl-3-desc": "Enrolled at Vietnam - Korea University of Information and Communication Technology (VKU).",
        "tl-4-title": "Joined Best Web Design 2022",
        "tl-4-desc": "Participated in the Best Web Design 2022 competition.",
        "tl-5-title": "Completed Obooks Reading Website",
        "tl-6-title": "Most Impressive Website Award",
        "tl-6-desc": "Won the Most Impressive Website Award at Best Web Design 2022.",
        "tl-7-title": "3rd Prize - Best Web Design 2022",
        "tl-7-desc": "Won third prize at Best Web Design 2022.",
        "tl-8-title": "Nix Vietnam-Japan Bridge Engineer Training",
        "tl-8-desc": "Joined the Vietnam-Japan bridge engineer training program organized by Nix.",
        "tl-9-title": "Completed HiveHub App",
        "tl-10-title": "TETOTE Hackathon - 4th Prize",
        "tl-10-desc": "Participated in TETOTE Hackathon and won 4th prize.",
        "tl-11-title": "Participated in Robocar Competition",
        "tl-11-desc": "Joined the Robocar competition.",
        "tl-12-title": "Completed AI Traffic Violation Project",
        "tl-13-title": "Completed Bang Bang Mi Game",
        "tl-14-title": "Internship at Mynavi Vietnam",
        "tl-14-desc": "Started internship program at Mynavi Vietnam.",
        "tl-15-title": "Completed Internship at Mynavi Vietnam",
        "tl-15-desc": "Successfully completed the internship program at Mynavi Vietnam.",
        "tl-16-title": "Completed Kickback Escape Game",
        "projects-title": "Featured Projects",
        "projects-subtitle": "Explore my journey through Game Development & Software Engineering",
        "project-1-feature-1": "Custom Physics-based movement system.",
        "project-1-feature-2": "Dynamic level design and obstacles.",
        "project-2-feature-1": "Wave-based enemy spawning system.",
        "project-2-feature-2": "Skill upgrade & inventory system.",
        "contact-title": "Contact",
        "contact-subtitle": "Let's work together!",
        "contact-address-title": "Address",
        "contact-call-title": "Call",
        "contact-email-title": "Email",
        "contact-loading": "Loading",
        "contact-sent": "Your message has been sent. Thank you!",
        "contact-submit": "Send Message",
        "footer-copyright": "© Copyright",
        "footer-rights": "All Rights Reserved"
      },
      html: {
        "about-role": "Unity Game Developer <span style=\"color:var(--accent-color)\">//</span> Full Stack Web Developer",
        "tl-5-desc": "Completed the personal reading website project: <a href=\"#project-obook\">Obooks</a>.",
        "tl-9-desc": "Completed the personal project <a href=\"#project-hivehub\">HiveHub</a>.",
        "tl-12-desc": "Completed personal AI project for traffic violation recognition: <a href=\"#project-tego-ai\">Tego AI</a>.",
        "tl-13-desc": "Completed personal game project <a href=\"#project-bang-bang-mi\">Bang Bang Mi</a>.",
        "tl-16-desc": "Completed personal game project <a href=\"#project-kickback-escape\">Kickback Escape</a>.",
        "project-1-desc": "An adventure role-playing game where players overcome obstacles using a unique mechanic: <strong>Weapon Recoil Movement</strong>. Instead of jumping, you shoot to propel yourself!",
        "project-2-desc": "A fast-paced shooting RPG. Collect energy to summon powerful Bosses. Upgrade your skills, dodge bullet hells, and claim victory.",
        "project-3-desc": "A comprehensive mobile application for project management based on the Scrum framework. Helps teams track tasks, sprints, and improve productivity.",
        "project-4-desc": "A web platform for reading lovers. Supports both Audiobooks and E-books. Features include personal libraries, reading history tracking, and a community forum.",
        "project-5-desc": "An intelligent application for traffic violation recognition. Uses machine learning models to detect and analyze traffic signs and violations in real-time."
      },
      placeholders: {
        "contact-name-input": "Your Name",
        "contact-email-input": "Your Email",
        "contact-subject-input": "Subject",
        "contact-message-input": "Message"
      },
      buttonText: {
        "project-1-btn": "View Code or Play Demo",
        "project-2-btn": "View Code or Play Demo",
        "project-3-btn": "View Code",
        "project-4-btn": "View Code",
        "project-5-btn": "View Code"
      }
    },
    ja: {
      typed: [
        "Unityゲームエンジニア",
        "フルスタックWebエンジニア",
        "React Nativeエンジニア",
        "C#・PHPエンジニア"
      ],
      text: {
        "nav-home": "ホーム",
        "nav-about": "プロフィール",
        "nav-skills": "スキル",
        "nav-achievements": "実績",
        "nav-timeline": "キャリア年表",
        "nav-projects": "プロジェクト",
        "nav-contact": "お問い合わせ",
        "hero-prefix": "私は",
        "about-title": "プロフィール",
        "about-subtitle": "3Dゲーム開発とWebアプリケーション開発の両領域に対応できるソフトウェアエンジニアです。",
        "about-intro": "情報技術を専攻する最終学年の学生として、私はマルチディシプリナリーな開発者を目指しています。PHP/SQLによるバックエンド設計力と、Unity/C#による魅力的なゲーム体験を設計する創造力を併せ持っています。",
        "about-label-birthday": "生年月日:",
        "about-label-github": "Github:",
        "about-label-phone": "電話:",
        "about-label-city": "居住地:",
        "about-label-age": "年齢:",
        "about-label-degree": "学歴:",
        "about-label-email": "メール:",
        "about-degree-value": "情報技術専攻・最終学年",
        "about-outro": "ゲームのレンダリング最適化からモバイルアプリ向けREST APIの設計まで、常に高性能でユーザー中心のプロダクト開発に取り組んでいます。",
        "skills-title": "技術スキル",
        "skills-subtitle": "ゲーム開発とソフトウェア開発の両軸で培った専門性",
        "skills-group-game": "ゲーム開発",
        "skills-game-1": "Unityエンジン (2D/3D)",
        "skills-game-2": "C#プログラミング",
        "skills-game-3": "ゲームロジック・物理",
        "skills-group-web": "Web・アプリ開発",
        "skills-web-1": "React Native / JavaScript",
        "skills-web-2": "PHP・MySQL（バックエンド）",
        "skills-web-3": "Git / Firebase / ツール",
        "achievements-title": "実績",
        "achievements-subtitle": "学習とコンテスト参加を通じて得た主な成果",
        "ach-1-title": "Best Web Design 2022 第3位",
        "ach-1-desc": "実用性の高いWebプロダクトで Best Web Design 2022 にて第3位を獲得しました。",
        "ach-2-title": "インパクトWebサイト賞",
        "ach-2-desc": "Best Web Design 2022 で「最も印象的なWebサイト賞」を受賞しました。",
        "ach-3-title": "Tetote Hackathon 奨励賞",
        "ach-3-desc": "創造性とチームワークが評価され、Tetote Hackathon で奨励賞を受賞しました。",
        "timeline-title": "キャリア年表",
        "timeline-subtitle": "プロジェクト、活動、経験、スキルを時系列でまとめています",
        "tl-1-title": "ハロン青少年情報学コンテスト 優勝",
        "tl-1-desc": "ハロン青少年情報学コンテストで優勝しました。",
        "tl-2-title": "町級情報学コンテスト 準優勝",
        "tl-2-desc": "町級情報学コンテストで準優勝しました。",
        "tl-3-title": "VKU入学",
        "tl-3-desc": "ベトナム・韓国情報通信技術大学（VKU）に入学しました。",
        "tl-4-title": "Best Web Design 2022 参加",
        "tl-4-desc": "Best Web Design 2022 に参加しました。",
        "tl-5-title": "Obooks 読書Webサイト完成",
        "tl-6-title": "インパクトWebサイト賞 受賞",
        "tl-6-desc": "Best Web Design 2022 で最も印象的なWebサイト賞を受賞しました。",
        "tl-7-title": "Best Web Design 2022 第3位",
        "tl-7-desc": "Best Web Design 2022 で第3位を受賞しました。",
        "tl-8-title": "Nix 日越ブリッジSE育成プログラムに参加",
        "tl-8-desc": "Nix主催の日越ブリッジSE育成プログラムに参加しました。",
        "tl-9-title": "HiveHub アプリ完成",
        "tl-10-title": "TETOTE Hackathon 第4位",
        "tl-10-desc": "TETOTE Hackathon に参加し、第4位を獲得しました。",
        "tl-11-title": "Robocarコンテストに参加",
        "tl-11-desc": "Robocarコンテストに参加しました。",
        "tl-12-title": "交通違反認識AIプロジェクト完成",
        "tl-13-title": "Bang Bang Mi ゲーム完成",
        "tl-14-title": "Mynavi Vietnam インターン開始",
        "tl-14-desc": "Mynavi Vietnam のインターンプログラムを開始しました。",
        "tl-15-title": "Mynavi Vietnam インターン修了",
        "tl-15-desc": "Mynavi Vietnam のインターンプログラムを修了しました。",
        "tl-16-title": "Kickback Escape ゲーム完成",
        "projects-title": "主要プロジェクト",
        "projects-subtitle": "ゲーム開発とソフトウェア開発における代表的な取り組み",
        "project-1-feature-1": "独自の物理ベース移動システム。",
        "project-1-feature-2": "動的なレベル設計と障害物配置。",
        "project-2-feature-1": "ウェーブ型の敵出現システム。",
        "project-2-feature-2": "スキル強化・インベントリシステム。",
        "contact-title": "お問い合わせ",
        "contact-subtitle": "ご相談・ご連絡をお待ちしています。",
        "contact-address-title": "住所",
        "contact-call-title": "電話",
        "contact-email-title": "メール",
        "contact-loading": "送信中",
        "contact-sent": "メッセージが送信されました。ありがとうございます！",
        "contact-submit": "送信する",
        "footer-copyright": "© 著作権",
        "footer-rights": "All Rights Reserved"
      },
      html: {
        "about-role": "Unityゲームエンジニア <span style=\"color:var(--accent-color)\">//</span> フルスタックWebエンジニア",
        "tl-5-desc": "個人プロジェクトとして読書Webサイト <a href=\"#project-obook\">Obooks</a> を完成しました。",
        "tl-9-desc": "個人プロジェクト <a href=\"#project-hivehub\">HiveHub</a> を完成しました。",
        "tl-12-desc": "交通違反認識の個人AIプロジェクト <a href=\"#project-tego-ai\">Tego AI</a> を完成しました。",
        "tl-13-desc": "個人ゲームプロジェクト <a href=\"#project-bang-bang-mi\">Bang Bang Mi</a> を完成しました。",
        "tl-16-desc": "個人ゲームプロジェクト <a href=\"#project-kickback-escape\">Kickback Escape</a> を完成しました。",
        "project-1-desc": "独自メカニクス「<strong>Weapon Recoil Movement</strong>」を活用したアドベンチャーRPGです。ジャンプの代わりに射撃反動で移動する設計になっています。",
        "project-2-desc": "テンポの速いシューティングRPGです。エネルギーを集めて強力なボスを召喚し、スキルを強化しながら弾幕を突破します。",
        "project-3-desc": "Scrumベースのプロジェクト管理モバイルアプリです。タスクやスプリントを可視化し、チームの生産性向上を支援します。",
        "project-4-desc": "読書ユーザー向けのWebプラットフォームです。オーディオブックと電子書籍に対応し、個人ライブラリ、読書履歴、コミュニティ機能を提供します。",
        "project-5-desc": "交通違反を認識するAIアプリです。機械学習モデルにより、標識や違反行動をリアルタイムで検出・分析します。"
      },
      placeholders: {
        "contact-name-input": "お名前",
        "contact-email-input": "メールアドレス",
        "contact-subject-input": "件名",
        "contact-message-input": "お問い合わせ内容"
      },
      buttonText: {
        "project-1-btn": "コードを見る / デモを見る",
        "project-2-btn": "コードを見る / デモを見る",
        "project-3-btn": "コードを見る",
        "project-4-btn": "コードを見る",
        "project-5-btn": "コードを見る"
      }
    },
    vi: {
      typed: [
        "Lập trình viên Game Unity",
        "Lập trình viên Web Full Stack",
        "Lập trình viên React Native",
        "Lập trình viên C# & PHP"
      ],
      text: {
        "nav-home": "Trang chủ",
        "nav-about": "Giới thiệu",
        "nav-skills": "Kỹ năng",
        "nav-achievements": "Thành tựu",
        "nav-timeline": "Dòng thời gian",
        "nav-projects": "Dự án",
        "nav-contact": "Liên hệ",
        "hero-prefix": "Tôi là",
        "about-title": "Về tôi",
        "about-subtitle": "Một Software Engineer đa năng có thể xây dựng thế giới 3D và ứng dụng web mạnh mẽ.",
        "about-intro": "Là sinh viên CNTT năm cuối, tôi định hướng mình là một lập trình viên đa lĩnh vực. Tôi có tư duy logic để xây dựng hệ thống backend với PHP/SQL và khả năng sáng tạo để tạo trải nghiệm gameplay hấp dẫn bằng Unity/C#.",
        "about-label-birthday": "Ngày sinh:",
        "about-label-github": "Github:",
        "about-label-phone": "Điện thoại:",
        "about-label-city": "Thành phố:",
        "about-label-age": "Tuổi:",
        "about-label-degree": "Học vấn:",
        "about-label-email": "Email:",
        "about-degree-value": "Sinh viên năm cuối",
        "about-outro": "Dù là tối ưu pipeline render cho game hay thiết kế REST API mở rộng cho ứng dụng mobile, tôi luôn cam kết tạo ra sản phẩm hiệu năng cao và lấy người dùng làm trung tâm.",
        "skills-title": "Kỹ năng chuyên môn",
        "skills-subtitle": "Năng lực song song giữa phát triển game và kỹ thuật phần mềm",
        "skills-group-game": "Phát triển game",
        "skills-game-1": "Unity Engine (2D/3D)",
        "skills-game-2": "Lập trình C#",
        "skills-game-3": "Logic game & Vật lý",
        "skills-group-web": "Web & Ứng dụng",
        "skills-web-1": "React Native / JavaScript",
        "skills-web-2": "PHP & MySQL (Backend)",
        "skills-web-3": "Git / Firebase / Công cụ",
        "achievements-title": "Thành tựu",
        "achievements-subtitle": "Những cột mốc nổi bật trong hành trình học tập và thi đấu",
        "ach-1-title": "Giải 3 - Best Web Design 2022",
        "ach-1-desc": "Đạt giải ba cuộc thi Best Web Design 2022 với sản phẩm web có tính thực tiễn cao.",
        "ach-2-title": "Giải Website ấn tượng nhất",
        "ach-2-desc": "Đạt giải Website ấn tượng nhất tại cuộc thi Best Web Design 2022.",
        "ach-3-title": "Giải khuyến khích - Tetote Hackathon",
        "ach-3-desc": "Đạt giải khuyến khích tại Tetote Hackathon nhờ sáng tạo và làm việc nhóm tốt.",
        "timeline-title": "Dòng thời gian",
        "timeline-subtitle": "Các dự án, hoạt động, kinh nghiệm và kỹ năng theo từng giai đoạn",
        "tl-1-title": "Giải nhất - Tin học trẻ chuyên Hạ Long",
        "tl-1-desc": "Đạt giải nhất cuộc thi Tin học trẻ chuyên Hạ Long.",
        "tl-2-title": "Giải nhì - Tin học cấp thị xã",
        "tl-2-desc": "Đạt giải nhì cuộc thi Tin học cấp thị xã.",
        "tl-3-title": "Nhập học VKU",
        "tl-3-desc": "Nhập học trường Đại học CNTT và Truyền thông Việt Hàn (VKU).",
        "tl-4-title": "Tham gia Best Web Design 2022",
        "tl-4-desc": "Tham gia cuộc thi Best Web Design 2022.",
        "tl-5-title": "Hoàn thành website đọc sách Obooks",
        "tl-6-title": "Đạt giải Website ấn tượng nhất",
        "tl-6-desc": "Đạt giải Website ấn tượng nhất cuộc thi Best Web Design 2022.",
        "tl-7-title": "Đạt giải 3 - Best Web Design 2022",
        "tl-7-desc": "Đạt giải 3 cuộc thi Best Web Design 2022.",
        "tl-8-title": "Tham gia đào tạo kỹ sư cầu nối Việt - Nhật của Nix",
        "tl-8-desc": "Tham gia chương trình đào tạo kỹ sư cầu nối Việt - Nhật do Nix tổ chức.",
        "tl-9-title": "Hoàn thành ứng dụng HiveHub",
        "tl-10-title": "TETOTE Hackathon - Giải 4",
        "tl-10-desc": "Tham gia cuộc thi TETOTE Hackathon và đoạt giải 4.",
        "tl-11-title": "Tham gia cuộc thi Robocar",
        "tl-11-desc": "Tham gia cuộc thi Robocar.",
        "tl-12-title": "Hoàn thành dự án AI nhận biết vi phạm giao thông",
        "tl-13-title": "Hoàn thành game Bang Bang Mi",
        "tl-14-title": "Thực tập tại Mynavi Vietnam",
        "tl-14-desc": "Bắt đầu chương trình thực tập tại Mynavi Vietnam.",
        "tl-15-title": "Hoàn thành thực tập tại Mynavi Vietnam",
        "tl-15-desc": "Hoàn thành chương trình thực tập tại Mynavi Vietnam.",
        "tl-16-title": "Hoàn thành game Kickback Escape",
        "projects-title": "Dự án nổi bật",
        "projects-subtitle": "Hành trình phát triển game và kỹ thuật phần mềm của tôi",
        "project-1-feature-1": "Hệ thống di chuyển vật lý tự xây dựng.",
        "project-1-feature-2": "Thiết kế màn chơi và chướng ngại vật động.",
        "project-2-feature-1": "Hệ thống sinh quái theo từng đợt.",
        "project-2-feature-2": "Hệ thống nâng cấp kỹ năng & kho đồ.",
        "contact-title": "Liên hệ",
        "contact-subtitle": "Hãy cùng làm việc với nhau!",
        "contact-address-title": "Địa chỉ",
        "contact-call-title": "Điện thoại",
        "contact-email-title": "Email",
        "contact-loading": "Đang gửi",
        "contact-sent": "Tin nhắn của bạn đã được gửi. Cảm ơn bạn!",
        "contact-submit": "Gửi tin nhắn",
        "footer-copyright": "© Bản quyền",
        "footer-rights": "Đã đăng ký bản quyền"
      },
      html: {
        "about-role": "Lập trình viên Game Unity <span style=\"color:var(--accent-color)\">//</span> Lập trình viên Web Full Stack",
        "tl-5-desc": "Hoàn thành dự án website đọc sách cá nhân: <a href=\"#project-obook\">Obooks</a>.",
        "tl-9-desc": "Hoàn thành dự án cá nhân <a href=\"#project-hivehub\">HiveHub</a>.",
        "tl-12-desc": "Hoàn thành dự án AI cá nhân nhận biết vi phạm giao thông: <a href=\"#project-tego-ai\">Tego AI</a>.",
        "tl-13-desc": "Hoàn thành dự án game cá nhân <a href=\"#project-bang-bang-mi\">Bang Bang Mi</a>.",
        "tl-16-desc": "Hoàn thành dự án game cá nhân <a href=\"#project-kickback-escape\">Kickback Escape</a>.",
        "project-1-desc": "Game nhập vai phiêu lưu nơi người chơi vượt chướng ngại bằng cơ chế đặc biệt: <strong>Weapon Recoil Movement</strong>. Thay vì nhảy, bạn bắn để tự đẩy bản thân!",
        "project-2-desc": "Game bắn súng RPG tốc độ cao. Thu thập năng lượng để triệu hồi Boss mạnh, nâng cấp kỹ năng, né mưa đạn và giành chiến thắng.",
        "project-3-desc": "Ứng dụng di động quản lý dự án theo Scrum. Hỗ trợ đội nhóm theo dõi task, sprint và tăng năng suất làm việc.",
        "project-4-desc": "Nền tảng web dành cho người yêu đọc sách. Hỗ trợ cả Audiobook và E-book, có thư viện cá nhân, lịch sử đọc và diễn đàn cộng đồng.",
        "project-5-desc": "Ứng dụng AI nhận diện vi phạm giao thông. Sử dụng mô hình học máy để phát hiện và phân tích biển báo, hành vi vi phạm theo thời gian thực."
      },
      placeholders: {
        "contact-name-input": "Họ và tên",
        "contact-email-input": "Email của bạn",
        "contact-subject-input": "Chủ đề",
        "contact-message-input": "Nội dung"
      },
      buttonText: {
        "project-1-btn": "Xem mã nguồn / Demo",
        "project-2-btn": "Xem mã nguồn / Demo",
        "project-3-btn": "Xem mã nguồn",
        "project-4-btn": "Xem mã nguồn",
        "project-5-btn": "Xem mã nguồn"
      }
    }
  };

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setHtml(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }

  function setPlaceholder(id, value) {
    const el = document.getElementById(id);
    if (el) el.setAttribute("placeholder", value);
  }

  function setButtonText(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    const icon = el.querySelector("i");
    el.innerHTML = "";
    if (icon) {
      el.appendChild(icon);
      el.append(" " + value);
      return;
    }
    el.textContent = value;
  }

  function applyLanguage(lang) {
    const locale = translations[lang] ? lang : "en";
    const payload = translations[locale];

    document.documentElement.lang = locale === "ja" ? "ja" : locale === "vi" ? "vi" : "en";

    Object.entries(payload.text).forEach(([id, value]) => setText(id, value));
    Object.entries(payload.html).forEach(([id, value]) => setHtml(id, value));
    Object.entries(payload.placeholders).forEach(([id, value]) => setPlaceholder(id, value));
    Object.entries(payload.buttonText).forEach(([id, value]) => setButtonText(id, value));

    const typedTarget = document.querySelector(".typed");
    if (typedTarget) {
      typedTarget.setAttribute("data-typed-items", payload.typed.join(","));
    }
    if (typeof window.initPortfolioTyped === "function") {
      window.initPortfolioTyped(payload.typed);
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === locale);
    });

    localStorage.setItem("portfolioLang", locale);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    const preferred = localStorage.getItem("portfolioLang");
    applyLanguage(preferred || "en");
  });
})();
