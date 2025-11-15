// シンプルな翻訳システム - 依存ライブラリなし、完全手動実装

export type Lang = 'ja' | 'en';

export interface Translations {
  header: {
    nav: {
      home: string;
      blog: string;
      services: string;
      products: string;
      results: string;
      about: string;
      faq: string;
      contact: string;
    };
    theme: {
      toggle: string;
      light: string;
      dark: string;
    };
    menu: {
      open: string;
    };
  };
  footer: {
    copyright: string;
  };
  home: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      tagline: string;
    };
    intro: {
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      final: string;
    };
    services: {
      title: string;
      popular: string;
      advisor: {
        title: string;
        price: string;
        desc: string;
      };
      project: {
        title: string;
        price: string;
        desc: string;
      };
      cta: string;
    };
    results: {
      title: string;
      hospital: {
        name: string;
        desc: string;
      };
      meo: {
        name: string;
        desc: string;
      };
      cta: string;
    };
    about: {
      title: string;
      name: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      p5: string;
      tagline: string;
    };
    lineContact: {
      title: string;
      description: string;
      button: string;
    };
  };
  blog: {
    title: string;
    count: (n: number) => string;
    back: string;
  };
  common: {
    details: string;
  };
}

export const translations: Record<Lang, Translations> = {
  ja: {
    header: {
      nav: {
        home: 'ホーム',
        blog: 'ブログ',
        services: 'サービス',
        products: '開発製品',
        results: '実績',
        about: 'スキルスタック',
        faq: 'FAQ',
        contact: 'お問い合わせ'
      },
      theme: {
        toggle: 'テーマ切替',
        light: 'ライト',
        dark: 'ダーク'
      },
      menu: {
        open: 'メニューを開く'
      }
    },
    footer: {
      copyright: '© 2022-2025 infoHiroki. All rights reserved.'
    },
    home: {
      meta: {
        title: 'infoHiroki | 中小企業・スタートアップのDX・生成AI導入を伴走支援',
        description: '技術者が直接ヒアリング・提案。開発からコンサルまでワンストップ。中小企業・スタートアップのDX・生成AI導入を伴走支援'
      },
      hero: {
        tagline: '変革せよ。'
      },
      intro: {
        p1: '中小企業・スタートアップの業務変革を、<br>エンジニアが直接サポートします。',
        p2: '生成AI・DXで業務効率化を実現。<br>開発からコンサルまでワンストップで対応。',
        p3: '技術者が直接ヒアリング・提案・実装。<br>あなたの企業を伴走支援します。',
        p4: '議事録自動化から、文書作成、顧客対応まで。',
        final: 'エンジニアが直接、あなたの企業に寄り添います。'
      },
      services: {
        title: '生成AI導入支援サービス',
        popular: '人気',
        advisor: {
          title: '技術顧問サービス',
          price: '月額 5万円',
          desc: '継続的な生成AI活用技術支援'
        },
        project: {
          title: '生成AI導入プロジェクト',
          price: '20〜500万円',
          desc: '企業規模に応じた生成AI導入を完了'
        },
        cta: 'サービス詳細を見る'
      },
      results: {
        title: '生成AI導入実績',
        hospital: {
          name: '桜十字福岡病院様',
          desc: 'Whisper活用で議事録作成80%時短・月15万円コスト削減を実現'
        },
        meo: {
          name: 'MEO対策企業様',
          desc: 'ChatGPT・Claude活用で記事制作効率50%向上'
        },
        cta: '実績詳細を見る'
      },
      about: {
        title: 'About',
        name: 'Hiroki Takamura',
        p1: '10歳でコンピューターに出会い、<br>インターネット黎明期の衝撃を体験。',
        p2: '16歳でカポエラを始め、<br>ダンサー・振付師として東京ドーム公演やMV出演を経験。',
        p3: '大学ではインド哲学を専攻し、東洋思想の深い理解を得る。<br>ヨガ講師（Sivananda Yoga TTC）として<br>10年以上の指導とDVD監修を手がける。',
        p4: 'ロープアクセス事業やWebディレクターなど、<br>身体と技術の両面から仕事を探求。',
        p5: 'ChatGPT登場から毎日AI/LLMを追いかけ続け、<br>これまでの多様な経験すべてが<br>「技術で人の習慣を変える」という現在の仕事に<br>つながっていることを実感している。',
        tagline: '技術と人間、両方を深く理解する<br>専門家として活動中。'
      },
      lineContact: {
        title: '💬 お気軽にご相談ください',
        description: 'サービスに関するご質問やご相談は、LINEからお気軽にお問い合わせください',
        button: 'LINEで相談する'
      }
    },
    blog: {
      title: '📝 ブログ',
      count: (n) => `全 ${n} 記事`,
      back: '← ブログ一覧に戻る'
    },
    common: {
      details: '詳細を見る'
    }
  },
  en: {
    header: {
      nav: {
        home: 'Home',
        blog: 'Blog',
        services: 'Services',
        products: 'Products',
        results: 'Results',
        about: 'Skills',
        faq: 'FAQ',
        contact: 'Contact'
      },
      theme: {
        toggle: 'Toggle theme',
        light: 'Light',
        dark: 'Dark'
      },
      menu: {
        open: 'Open menu'
      }
    },
    footer: {
      copyright: '© 2022-2025 infoHiroki. All rights reserved.'
    },
    home: {
      meta: {
        title: 'infoHiroki | DX & Generative AI Implementation Support for SMEs and Startups',
        description: 'Direct consultation from engineers. One-stop support from development to consulting. Accompany SMEs and startups in DX and Generative AI implementation.'
      },
      hero: {
        tagline: 'Transform.'
      },
      intro: {
        p1: 'We support business transformation for SMEs and startups,<br>with direct engineer support.',
        p2: 'Achieve operational efficiency through Generative AI and DX.<br>One-stop support from development to consulting.',
        p3: 'Engineers directly interview, propose, and implement.<br>We accompany your company.',
        p4: 'From automated meeting minutes to document creation and customer support.',
        final: 'Engineers work closely with your company.'
      },
      services: {
        title: 'Generative AI Implementation Services',
        popular: 'Popular',
        advisor: {
          title: 'Technical Advisor Service',
          price: '¥50,000/month',
          desc: 'Continuous Generative AI technical support'
        },
        project: {
          title: 'Generative AI Implementation Project',
          price: '¥200,000 - ¥5,000,000',
          desc: 'Complete Generative AI implementation tailored to company size'
        },
        cta: 'View Service Details'
      },
      results: {
        title: 'Generative AI Implementation Results',
        hospital: {
          name: 'Sakurajuji Fukuoka Hospital',
          desc: 'Achieved 80% time reduction in meeting minutes creation and ¥150,000/month cost reduction using Whisper'
        },
        meo: {
          name: 'MEO Strategy Company',
          desc: '50% improvement in article production efficiency using ChatGPT and Claude'
        },
        cta: 'View Results Details'
      },
      about: {
        title: 'About',
        name: 'Hiroki Takamura',
        p1: 'Encountered computers at age 10,<br>experiencing the shock of the early Internet era.',
        p2: 'Started Capoeira at age 16,<br>performed at Tokyo Dome and in music videos as a dancer and choreographer.',
        p3: 'Majored in Indian philosophy at university, gaining deep understanding of Eastern thought.<br>As a Yoga instructor (Sivananda Yoga TTC),<br>has taught for over 10 years and supervised DVD production.',
        p4: 'Explored work from both physical and technical perspectives,<br>including rope access business and web direction.',
        p5: 'Since the advent of ChatGPT, has been following AI/LLM daily,<br>realizing that all diverse experiences<br>have led to the current work of<br>"changing people\'s habits through technology".',
        tagline: 'Active as an expert who deeply understands<br>both technology and humanity.'
      },
      lineContact: {
        title: '💬 Feel free to contact us',
        description: 'Please feel free to contact us via LINE for any questions or consultations regarding our services',
        button: 'Contact via LINE'
      }
    },
    blog: {
      title: '📝 Blog',
      count: (n) => `${n} articles in total`,
      back: '← Back to blog list'
    },
    common: {
      details: 'View Details'
    }
  }
};
