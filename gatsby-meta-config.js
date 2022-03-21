module.exports = {
  title: `JaeseokWoo.github.io`,
  description: `JaeseokWoo.github.io`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jaeseokwoo.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `JaeseokWoo/JaeseokWoo.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `우재석`,
    bio: {
      role: `개발자`,
      description: ['함께 일하고 싶은', '지속 가능한'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/JaeseokWoo`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `jaeseokw@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.01 ~ 2022.01',
        activity: '삼성 SDS 2022 동계 알고리즘 특강',
        links: {},
      },
      {
        date: '2021.08 ~ 2021.12',
        activity: '부스트캠프 웹·모바일 6기 멤버십 (네이버 커넥트재단) - 웹 풀스택',
        links: {},
      },
      {
        date: '2021.07 ~ 2021.08',
        activity: '부스트캠프 웹·모바일 6기 챌린지 (네이버 커넥트재단) - 웹 풀스택',
        links: {},
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '온라인 공동 구매 플랫폼(sajagachi)',
        description: 'sajagachi는 부스트캠프 웹·모바일 6기 멤버십 그룹 프로젝트에서 진행한 프로젝트로 다른 사람들과 협업하면서 프로젝트를 기획, 설계, 구현, 배포를 진행한 프로젝트입니다. 실제로 1000만개의 데이터를 직접 넣고 쿼리 시간을 측정하면서 쿼리 성능을 기존 쿼리보다 약 250% 향상시켰습니다. Intersection Observer을 사용하여 메인 페이지의 게시글 조회와 채팅 페이지에 무한 스크롤과 API 구현을 맡았습니다. 게시글 상세 페이지 UI와 API, LinkPreview 구현을 맡았습니다.',
        techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Socket.IO'],
        links: {
          github: 'https://github.com/boostcampwm-2021/WEB19-sajagachi',
          demo: 'https://www.youtube.com/watch?v=U4Dg0txMzIA&t=5s'
        },
      },
    ],
  },
};
