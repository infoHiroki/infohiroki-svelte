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
  services: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    subtitle: string;
    pricing: {
      title: string;
      advisor: {
        badge: string;
        title: string;
        price: string;
        desc: string;
      };
      project: {
        title: string;
        price: string;
        desc: string;
      };
      consultation: {
        title: string;
        price: string;
        desc: string;
      };
    };
    details: {
      title: string;
      project: {
        title: string;
        phase1: string;
        phase2: string;
        phase3: string;
        duration: string;
      };
      advisor: {
        title: string;
        hours: string;
        scope: string;
        period: string;
        support: string;
      };
      consultation: {
        title: string;
        time: string;
        deliverables: string;
        content: string;
        target: string;
      };
    };
    technologies: {
      title: string;
      mainAI: {
        title: string;
        content: string;
      };
      voiceImage: {
        title: string;
        content: string;
      };
      integration: {
        title: string;
        content: string;
      };
      business: {
        title: string;
        content: string;
      };
      specialized: {
        title: string;
        content: string;
      };
    };
    lineContact: {
      title: string;
      description: string;
      button: string;
    };
  };
  products: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    intro: string;
    koemoji: {
      title: string;
      subtitle: string;
      feature: string;
      characteristics: string;
      tech: string;
      platform: string;
      linkGo: string;
      linkPython: string;
      linkSite: string;
    };
    youtubeMojicopy: {
      title: string;
      subtitle: string;
      feature: string;
      characteristics: string;
      tech: string;
      platform: string;
      linkStore: string;
    };
    notionTasker: {
      title: string;
      subtitle: string;
      feature: string;
      tech: string;
      platform: string;
      linkStore: string;
    };
    website: {
      title: string;
      subtitle: string;
      feature: string;
      characteristics: string;
      tech: string;
      support: string;
      linkContact: string;
    };
    webapp: {
      title: string;
      subtitle: string;
      feature: string;
      characteristics: string;
      tech: string;
      platform: string;
      linkContact: string;
    };
    lineContact: {
      title: string;
      description: string;
      button: string;
    };
  };
  results: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    cases: {
      hospital: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      dental: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      nursing: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      architecture: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      construction: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      marketing: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      restaurant: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      production: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
      training: {
        title: string;
        subtitle: string;
        challenge: string;
        solution: string;
        outcome: string;
      };
    };
    lineContact: {
      title: string;
      description: string;
      button: string;
    };
  };
  about: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    programming: {
      title: string;
      python: {
        title: string;
        desc: string;
      };
      javascript: {
        title: string;
        desc: string;
      };
      go: {
        title: string;
        desc: string;
      };
      sql: {
        title: string;
        desc: string;
      };
    };
    frameworks: {
      title: string;
      react: {
        title: string;
        desc: string;
      };
      fastapi: {
        title: string;
        desc: string;
      };
      nodejs: {
        title: string;
        desc: string;
      };
      ml: {
        title: string;
        desc: string;
      };
    };
    ai: {
      title: string;
      llm: {
        title: string;
        desc: string;
      };
      dataAnalysis: {
        title: string;
        desc: string;
      };
      nlp: {
        title: string;
        desc: string;
      };
      operations: {
        title: string;
        desc: string;
      };
    };
    infrastructure: {
      title: string;
      cloud: {
        title: string;
        desc: string;
      };
      container: {
        title: string;
        desc: string;
      };
      automation: {
        title: string;
        desc: string;
      };
      monitoring: {
        title: string;
        desc: string;
      };
    };
    tools: {
      title: string;
      notion: {
        title: string;
        desc: string;
      };
      zapier: {
        title: string;
        desc: string;
      };
      git: {
        title: string;
        desc: string;
      };
      pm: {
        title: string;
        desc: string;
      };
    };
    lineContact: {
      title: string;
      description: string;
      button: string;
    };
  };
  faq: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    items: {
      target: {
        q: string;
        a: string;
      };
      flow: {
        q: string;
        a: string;
      };
      pricing: {
        q: string;
        a: string;
      };
      contract: {
        q: string;
        a: string;
      };
      online: {
        q: string;
        a: string;
      };
      security: {
        q: string;
        a: string;
      };
      tools: {
        q: string;
        a: string;
      };
      knowledge: {
        q: string;
        a: string;
      };
    };
    lineContact: {
      title: string;
      description: string;
      button: string;
    };
  };
  contact: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    intro: string;
    line: {
      title: string;
      description: string;
      benefits: {
        title: string;
        instant: string;
        casual: string;
        fileShare: string;
        free: string;
      };
      qrText: string;
    };
    email: {
      title: string;
      description: string;
      note: string;
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
    services: {
      meta: {
        title: 'サービス | infoHiroki',
        description: '中小企業・スタートアップ向け生成AI導入支援 - エンジニアが直接ヒアリング・提案。開発からコンサルまでワンストップ対応'
      },
      title: 'サービス',
      subtitle: '中小企業・スタートアップのDX・生成AI導入支援<br>エンジニアが直接ヒアリング。開発からコンサルまでワンストップ対応🤖',
      pricing: {
        title: 'サービス・料金体系',
        advisor: {
          badge: '人気',
          title: '技術顧問サービス',
          price: '月額 5万円',
          desc: '月15時間の継続的な生成AI活用技術支援'
        },
        project: {
          title: '生成AI導入プロジェクト',
          price: '20〜500万円',
          desc: '企業規模・内容に応じた生成AI導入プロジェクト'
        },
        consultation: {
          title: 'AI導入相談',
          price: '1回 2万円',
          desc: '1.5時間の相談で現状分析レポート＋具体的改善提案書を提供'
        }
      },
      details: {
        title: '各サービス詳細',
        project: {
          title: '🚀 生成AI導入プロジェクト（20〜500万円）',
          phase1: '<strong>フェーズ1：</strong>現状分析・課題特定・AI選定',
          phase2: '<strong>フェーズ2：</strong>システム設計・API連携・テスト実装',
          phase3: '<strong>フェーズ3：</strong>本格導入・社員研修・運用定着',
          duration: '<strong>期間：</strong>2〜6ヶ月・企業規模に応じた最適提案'
        },
        advisor: {
          title: '🤝 技術顧問サービス（月額5万円）',
          hours: '<strong>月間稼働時間：</strong>15時間',
          scope: '<strong>対応範囲：</strong>生成AI活用相談・技術実装・運用支援',
          period: '<strong>契約期間：</strong>6ヶ月または12ヶ月',
          support: '<strong>サポート：</strong>月次レポート・緊急対応含む'
        },
        consultation: {
          title: '💡 AI導入相談（1回2万円）',
          time: '<strong>時間：</strong>1.5時間の詳細ヒアリング',
          deliverables: '<strong>成果物：</strong>現状分析レポート＋具体的導入提案書',
          content: '<strong>内容：</strong>最適AI選定・費用見積・期待効果算出',
          target: '<strong>対象：</strong>生成AI導入を検討中の企業様'
        }
      },
      technologies: {
        title: '対応可能な生成AI・技術分野',
        mainAI: {
          title: '🤖 主要生成AI',
          content: '<strong>ChatGPT（OpenAI）</strong> - 汎用的な文書作成・質問応答<br><strong>Claude（Anthropic）</strong> - 長文分析・複雑な推論<br><strong>Gemini（Google）</strong> - Google Workspace連携'
        },
        voiceImage: {
          title: '🎤 音声・画像AI',
          content: '<strong>Whisper（OpenAI）</strong> - 音声認識・議事録自動化<br><strong>DALL-E / Midjourney</strong> - 画像生成・デザイン支援<br><strong>音声合成</strong> - 自動アナウンス・読み上げ'
        },
        integration: {
          title: '⚙️ システム連携',
          content: '<strong>API統合</strong> - 既存システムとAIの連携<br><strong>Notion AI連携</strong> - データベース×生成AI<br><strong>Excel/Google Sheets</strong> - スプレッドシート自動化'
        },
        business: {
          title: '🏢 業務領域',
          content: '<strong>議事録・文書作成</strong> - 会議効率化・資料自動生成<br><strong>顧客対応</strong> - チャットボット・メール自動返信<br><strong>データ分析</strong> - レポート生成・傾向分析'
        },
        specialized: {
          title: '🎯 特化支援',
          content: '<strong>医療・介護</strong> - 議事録、カルテ支援（桜十字病院実績）<br><strong>製造・建設</strong> - 作業記録、安全管理<br><strong>サービス業</strong> - 顧客対応、業務マニュアル'
        }
      },
      lineContact: {
        title: '💬 サービスについてご相談ください',
        description: '技術顧問サービスの詳細やお見積もりについて、LINEでお気軽にご相談ください',
        button: 'LINEで相談する'
      }
    },
    products: {
      meta: {
        title: '開発製品紹介 | infoHiroki',
        description: 'infoHirokiが開発した業務効率化ツールをご紹介します'
      },
      title: '開発製品紹介',
      intro: 'infoHirokiでは、実際の業務で使える効率化ツールを開発・提供しています。すべて実際の導入実績があり、現場で使われている製品です。',
      koemoji: {
        title: 'Koemoji-Go',
        subtitle: 'オールインワン音声処理システム',
        feature: '<strong>機能：</strong> 録音→文字起こし→AI要約の完全自動化',
        characteristics: '<strong>特徴：</strong> GUI/TUI対応、フォルダ監視、シングルバイナリ配布',
        tech: '<strong>技術：</strong> Go、Fyne、FasterWhisper、OpenAI API',
        platform: '<strong>対応：</strong> Windows、macOS（Apple Silicon対応）',
        linkGo: 'GitHub (Go版)',
        linkPython: 'GitHub (Python版)',
        linkSite: '紹介ページ'
      },
      youtubeMojicopy: {
        title: 'YouTube MojiCopy',
        subtitle: 'Chrome拡張機能',
        feature: '<strong>機能：</strong> プロンプト保存機能付きYouTube文字起こしコピー',
        characteristics: '<strong>特徴：</strong> 「要約して」等のプロンプト＋文字起こしでLLMに直接ペースト可能',
        tech: '<strong>技術：</strong> JavaScript、Chrome Extension API',
        platform: '<strong>対応：</strong> ChatGPT、Claude等のLLMとの連携',
        linkStore: 'Chrome Store'
      },
      notionTasker: {
        title: 'NotionTasker',
        subtitle: 'Notion連携Chrome拡張',
        feature: '<strong>機能：</strong> WebページからNotionへ直接タスク・メモ追加',
        tech: '<strong>技術：</strong> JavaScript、Notion API、Chrome Extension',
        platform: '<strong>対応：</strong> Notion データベースと連携',
        linkStore: 'Chrome Store'
      },
      website: {
        title: 'Webサイト制作',
        subtitle: 'コーポレートサイト・LP制作',
        feature: '<strong>機能：</strong> 企業サイト、ランディングページ、ブログサイト',
        characteristics: '<strong>特徴：</strong> レスポンシブ対応、SEO最適化、高速表示',
        tech: '<strong>技術：</strong> HTML/CSS、JavaScript、静的サイトジェネレーター',
        support: '<strong>対応：</strong> お問い合わせフォーム、アナリティクス連携',
        linkContact: 'お問い合わせ'
      },
      webapp: {
        title: 'Webアプリケーション',
        subtitle: 'カスタム業務システム開発',
        feature: '<strong>機能：</strong> 顧客管理、在庫管理、予約システム等',
        characteristics: '<strong>特徴：</strong> 完全カスタマイズ、データベース連携',
        tech: '<strong>技術：</strong> JavaScript、React、Node.js、PostgreSQL',
        platform: '<strong>対応：</strong> Vercel、Firebase等のクラウドデプロイ',
        linkContact: 'お問い合わせ'
      },
      lineContact: {
        title: '💬 製品についてご相談ください',
        description: '開発製品の導入や詳細について、LINEでお気軽にご相談ください',
        button: 'LINEで相談する'
      }
    },
    results: {
      meta: {
        title: '生成AI導入実績 | infoHiroki',
        description: '医療機関様、デジタルマーケティング企業様をはじめとする生成AI導入実績をご紹介'
      },
      title: '生成AI導入実績',
      cases: {
        hospital: {
          title: '総合病院様',
          subtitle: '医療業界 - Whisper活用議事録自動化システム導入',
          challenge: '<strong>課題：</strong> 会議・打ち合わせの議事録作成に月40時間費やしていた',
          solution: '<strong>解決策：</strong> OpenAI Whisper + <a href="/products#koemoji" style="color: #E73E8F; text-decoration: none;">Koemoji</a>システムによる音声認識自動化',
          outcome: '<strong>成果：</strong> 議事録作成80%時短・月15万円コスト削減・転記ミス0件達成'
        },
        dental: {
          title: '地域密着型歯科医院様',
          subtitle: '医療業界 - Notion導入支援＋業務自動化',
          challenge: '<strong>課題：</strong> 患者管理とメール対応業務の効率化',
          solution: '<strong>解決策：</strong> Notion導入支援＋GAS活用でメール自動下書き機能',
          outcome: '<strong>成果：</strong> 継続案件として機能追加、業務フロー改善'
        },
        nursing: {
          title: '訪問看護事業所様',
          subtitle: '医療業界 - ITコンサル・デジタル化支援',
          challenge: '<strong>課題：</strong> WebマーケティングとNotion活用',
          solution: '<strong>解決策：</strong> WebマーケティングへのAI技術導入・Notion運用支援',
          outcome: '<strong>成果：</strong> ITコンサルによる業務デジタル化推進'
        },
        architecture: {
          title: '建築事務所様',
          subtitle: '建築業界 - 報告書業務効率化',
          challenge: '<strong>課題：</strong> 点検調査データ管理と報告書作成',
          solution: '<strong>解決策：</strong> マクロ自動化・ドローン解析結果効率化',
          outcome: '<strong>成果：</strong> 報告書作成時間短縮、データ管理システム構築'
        },
        construction: {
          title: '建設コンサル様',
          subtitle: '建設業界 - 現場記録自動化',
          challenge: '<strong>課題：</strong> 現場会議の記録業務効率化',
          solution: '<strong>解決策：</strong> AI音声文字起こしシステム導入',
          outcome: '<strong>成果：</strong> 現場会議の記録業務を効率化'
        },
        marketing: {
          title: 'デジタルマーケティング企業様',
          subtitle: 'IT業界 - 大規模言語モデル活用支援',
          challenge: '<strong>課題：</strong> コンテンツ制作の効率化とクオリティ向上',
          solution: '<strong>解決策：</strong> ChatGPT・Claude活用フロー構築',
          outcome: '<strong>成果：</strong> 制作スピード3倍向上、品質の標準化'
        },
        restaurant: {
          title: '個人飲食店様',
          subtitle: '飲食業界 - 業務管理システム統合',
          challenge: '<strong>課題：</strong> 在庫管理・日報・売上管理の一元化',
          solution: '<strong>解決策：</strong> 統合管理システム構築',
          outcome: '<strong>成果：</strong> 業務管理の効率化、データ一元化'
        },
        production: {
          title: '制作会社様',
          subtitle: 'エンタメ業界 - Notion導入支援',
          challenge: '<strong>課題：</strong> プロジェクト管理の統一とチーム連携',
          solution: '<strong>解決策：</strong> Notionデータベース設計・運用支援',
          outcome: '<strong>成果：</strong> 情報共有効率化、プロジェクト進行の可視化'
        },
        training: {
          title: 'AI研修受講企業様',
          subtitle: '企業研修 - AI活用スキル習得支援',
          challenge: '<strong>課題：</strong> 実務に直結するAI活用スキル習得',
          solution: '<strong>解決策：</strong> 4時間×4回の企業向けAI研修プログラム',
          outcome: '<strong>成果：</strong> 各業界でのAIツール導入・活用指導'
        }
      },
      lineContact: {
        title: '💬 導入についてご相談ください',
        description: '同様の成果を実現するソリューションについて、LINEでお気軽にご相談ください',
        button: 'LINEで相談する'
      }
    },
    about: {
      meta: {
        title: 'スキルスタック | infoHiroki',
        description: 'エンジニアプロフィール - Go/Python/生成AI開発の技術スタック'
      },
      title: 'スキルスタック',
      programming: {
        title: 'プログラミング言語',
        python: {
          title: 'Python',
          desc: 'データ分析、AI/ML、Webアプリケーション開発'
        },
        javascript: {
          title: 'JavaScript/TypeScript',
          desc: 'フロントエンド・バックエンド開発'
        },
        go: {
          title: 'Go',
          desc: 'マイクロサービス、API開発'
        },
        sql: {
          title: 'SQL',
          desc: 'PostgreSQL、MySQL、データ分析'
        }
      },
      frameworks: {
        title: 'フレームワーク・ライブラリ',
        react: {
          title: 'React/Next.js',
          desc: 'Webアプリケーション開発、SSG/SSR'
        },
        fastapi: {
          title: 'FastAPI/Flask',
          desc: '軽量Python Webフレームワーク、REST API開発'
        },
        nodejs: {
          title: 'Node.js/Express',
          desc: 'バックエンドAPI、リアルタイム通信'
        },
        ml: {
          title: 'TensorFlow/PyTorch',
          desc: '機械学習、深層学習モデル開発'
        }
      },
      ai: {
        title: 'AI・機械学習',
        llm: {
          title: 'LLM活用',
          desc: 'OpenAI API、Claude、カスタムGPT開発'
        },
        dataAnalysis: {
          title: 'データ分析',
          desc: 'pandas、numpy、scikit-learn'
        },
        nlp: {
          title: '自然言語処理',
          desc: 'テキスト分析、感情分析、文書生成'
        },
        operations: {
          title: 'モデル運用',
          desc: 'APIデプロイ、バージョン管理、スクリプト自動化'
        }
      },
      infrastructure: {
        title: 'インフラ・ツール',
        cloud: {
          title: 'クラウドサービス',
          desc: 'Vercel、Supabase、Firebase'
        },
        container: {
          title: 'コンテナ',
          desc: 'Docker、ローカル開発環境'
        },
        automation: {
          title: '自動化',
          desc: 'GitHub Actions、デプロイ自動化'
        },
        monitoring: {
          title: '分析・モニタリング',
          desc: 'Google Analytics、Sentry、エラートラッキング'
        }
      },
      tools: {
        title: '業務効率化・ツール',
        notion: {
          title: 'Notion',
          desc: 'ワークスペース設計、API活用、自動化'
        },
        zapier: {
          title: 'Zapier/Make',
          desc: 'ワークフロー自動化、システム連携'
        },
        git: {
          title: 'Git/GitHub',
          desc: 'バージョン管理、チーム開発、OSS貢献'
        },
        pm: {
          title: 'プロジェクト管理',
          desc: 'アジャイル開発、スクラム、リーン手法'
        }
      },
      lineContact: {
        title: '💬 お気軽にご相談ください',
        description: '技術的なお悩みや業務効率化について、LINEでお気軽にご相談ください',
        button: 'LINEで相談する'
      }
    },
    faq: {
      meta: {
        title: 'FAQ（よくある質問） | infoHiroki',
        description: '生成AI導入に関するよくある質問にお答えします'
      },
      title: 'FAQ',
      items: {
        target: {
          q: 'Q. 🏢 どのような業界・規模の企業が対象ですか？',
          a: 'A. 主に<strong>中小企業・スタートアップ</strong>を対象としています。業界問わず対応可能で、特に<strong>医療・建設・IT・製造・サービス業</strong>での生成AI導入実績が豊富です。桜十字病院でのWhisper活用から中小企業のChatGPT導入まで、多種多様な業界での生成AI導入を支援しています。'
        },
        flow: {
          q: 'Q. 📋 サービス開始までの流れを教えてください',
          a: 'A. ①<strong>LINEでお問い合わせ</strong> → ②<strong>AI導入相談（2万円・1.5時間）</strong> → ③<strong>現状分析レポート＋導入提案書の提出</strong> → ④<strong>契約（プロジェクトまたは顧問）</strong> → ⑤<strong>サービス開始</strong>の流れです。まずはAI導入相談で具体的な効果と費用をご確認ください。'
        },
        pricing: {
          q: 'Q. 💰 料金プランと追加費用について教えてください',
          a: 'A. <strong>技術顧問サービス：月額5万円</strong>（6-12ヶ月契約）、<strong>生成AI導入プロジェクト：20-500万円</strong>（企業規模に応じて）、<strong>AI導入相談：1回2万円</strong>（1.5時間）です。基本的に追加費用はかかりませんが、特別なソフトウェアライセンスが必要な場合は事前にご相談いたします。'
        },
        contract: {
          q: 'Q. ⏰ 契約期間の縛りはありますか？',
          a: 'A. <strong>生成AI導入プロジェクトは2-6ヶ月</strong>（規模により）、<strong>技術顧問サービスは6ヶ月または12ヶ月の契約期間</strong>があります。<strong>AI導入相談は単発のため契約期間の縛りはありません。</strong>'
        },
        online: {
          q: 'Q. 💻 オンラインでの対応は可能ですか？',
          a: 'A. はい、全国どこでもオンラインで対応可能です。Zoom、Teams、Google Meet等のツールを使用し、画面共有やリモート操作でサポートします。'
        },
        security: {
          q: 'Q. 🔒 データの安全性は保障されますか？',
          a: 'A. お客様のデータは厳重に管理し、機密保持契約（NDA）の締結も可能です。作業終了後はお客様のデータを完全削除いたします。'
        },
        tools: {
          q: 'Q. 🤖 どのようなAIツールに対応していますか？',
          a: 'A. <strong>ChatGPT、Claude、Gemini</strong>等の大規模言語モデル、<strong>音声認識AI（Whisper等）</strong>、<strong>Google Apps Script、Excel VBA</strong>、<strong>Notion、音声文字起こしシステム</strong>等、幅広いツールに対応しています。実際の導入実績に基づいて最適なツールをご提案します。'
        },
        knowledge: {
          q: 'Q. ❓ 技術的な知識がなくても大丈夫ですか？',
          a: 'A. はい、技術的な知識は不要です。業務の課題や改善したい点をお聞かせいただければ、技術的な部分は全てお任せください。操作方法も丁寧にレクチャーいたします。'
        }
      },
      lineContact: {
        title: '💬 他にご質問はありませんか？',
        description: 'FAQで解決しないご質問があれば、LINEでお気軽にお問い合わせください',
        button: 'LINEで質問する'
      }
    },
    contact: {
      meta: {
        title: 'お問い合わせ | infoHiroki',
        description: '中小企業・スタートアップのDX・生成AI導入についてお気軽にご相談ください'
      },
      title: 'お問い合わせ',
      intro: '中小企業・スタートアップのDX・生成AI導入について、エンジニアが直接ご相談に乗ります。お気軽にお問い合わせください。',
      line: {
        title: '🔥 推奨：LINEでお問い合わせ',
        description: '<strong>最も迅速で確実</strong>にご対応できます。以下のボタンからLINE公式アカウントを友だち追加して、お気軽にメッセージをお送りください。',
        benefits: {
          title: 'LINEでお問い合わせのメリット',
          instant: '✅ <strong>即座に対応</strong> - リアルタイムでやり取り可能',
          casual: '✅ <strong>気軽に相談</strong> - チャット感覚で質問できます',
          fileShare: '✅ <strong>ファイル共有</strong> - 画像や資料も簡単に送信',
          free: '✅ <strong>無料相談</strong> - 初回は完全無料でご相談承ります'
        },
        qrText: 'または、こちらのQRコードをLINEアプリで読み取ってください：'
      },
      email: {
        title: '📧 メールでのお問い合わせ',
        description: 'メールでのご連絡も承っております。以下のアドレスまでお気軽にお問い合わせください。',
        note: '※ 返信には2-3営業日いただく場合がございます。お急ぎの場合はLINEをご利用ください。'
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
    services: {
      meta: {
        title: 'Services | infoHiroki',
        description: 'Generative AI Implementation Support for SMEs and Startups - Direct consultation from engineers. One-stop support from development to consulting.'
      },
      title: 'Services',
      subtitle: 'DX & Generative AI Implementation Support for SMEs and Startups<br>Direct consultation from engineers. One-stop support from development to consulting 🤖',
      pricing: {
        title: 'Services & Pricing',
        advisor: {
          badge: 'Popular',
          title: 'Technical Advisor Service',
          price: '¥50,000/month',
          desc: '15 hours/month of continuous Generative AI technical support'
        },
        project: {
          title: 'Generative AI Implementation Project',
          price: '¥200,000 - ¥5,000,000',
          desc: 'Generative AI implementation projects tailored to company size and requirements'
        },
        consultation: {
          title: 'AI Implementation Consultation',
          price: '¥20,000/session',
          desc: '1.5-hour consultation with situation analysis report + specific improvement proposal'
        }
      },
      details: {
        title: 'Service Details',
        project: {
          title: '🚀 Generative AI Implementation Project (¥200,000 - ¥5,000,000)',
          phase1: '<strong>Phase 1:</strong> Current situation analysis, challenge identification, AI selection',
          phase2: '<strong>Phase 2:</strong> System design, API integration, test implementation',
          phase3: '<strong>Phase 3:</strong> Full deployment, employee training, operational establishment',
          duration: '<strong>Duration:</strong> 2-6 months, optimal proposal based on company size'
        },
        advisor: {
          title: '🤝 Technical Advisor Service (¥50,000/month)',
          hours: '<strong>Monthly hours:</strong> 15 hours',
          scope: '<strong>Scope:</strong> Generative AI consultation, technical implementation, operational support',
          period: '<strong>Contract period:</strong> 6 or 12 months',
          support: '<strong>Support:</strong> Monthly reports, emergency response included'
        },
        consultation: {
          title: '💡 AI Implementation Consultation (¥20,000/session)',
          time: '<strong>Time:</strong> 1.5-hour detailed interview',
          deliverables: '<strong>Deliverables:</strong> Current situation analysis report + specific implementation proposal',
          content: '<strong>Content:</strong> Optimal AI selection, cost estimation, expected benefits calculation',
          target: '<strong>Target:</strong> Companies considering Generative AI implementation'
        }
      },
      technologies: {
        title: 'Supported Generative AI & Technologies',
        mainAI: {
          title: '🤖 Main Generative AI',
          content: '<strong>ChatGPT (OpenAI)</strong> - General document creation, Q&A<br><strong>Claude (Anthropic)</strong> - Long text analysis, complex reasoning<br><strong>Gemini (Google)</strong> - Google Workspace integration'
        },
        voiceImage: {
          title: '🎤 Voice & Image AI',
          content: '<strong>Whisper (OpenAI)</strong> - Voice recognition, meeting minutes automation<br><strong>DALL-E / Midjourney</strong> - Image generation, design support<br><strong>Voice synthesis</strong> - Automatic announcements, text-to-speech'
        },
        integration: {
          title: '⚙️ System Integration',
          content: '<strong>API Integration</strong> - Connecting existing systems with AI<br><strong>Notion AI Integration</strong> - Database × Generative AI<br><strong>Excel/Google Sheets</strong> - Spreadsheet automation'
        },
        business: {
          title: '🏢 Business Areas',
          content: '<strong>Meeting minutes & document creation</strong> - Meeting efficiency, automatic material generation<br><strong>Customer support</strong> - Chatbots, automated email responses<br><strong>Data analysis</strong> - Report generation, trend analysis'
        },
        specialized: {
          title: '🎯 Specialized Support',
          content: '<strong>Healthcare</strong> - Meeting minutes, medical record support (Sakurajuji Hospital results)<br><strong>Manufacturing & Construction</strong> - Work records, safety management<br><strong>Service industry</strong> - Customer support, business manuals'
        }
      },
      lineContact: {
        title: '💬 Contact us about our services',
        description: 'Feel free to contact us via LINE for details about our technical advisor service and quotes',
        button: 'Contact via LINE'
      }
    },
    products: {
      meta: {
        title: 'Products | infoHiroki',
        description: 'Introducing business efficiency tools developed by infoHiroki'
      },
      title: 'Products',
      intro: 'infoHiroki develops and provides efficiency tools for actual business use. All products have proven track records and are being used in real-world environments.',
      koemoji: {
        title: 'Koemoji-Go',
        subtitle: 'All-in-one voice processing system',
        feature: '<strong>Features:</strong> Complete automation of recording → transcription → AI summary',
        characteristics: '<strong>Characteristics:</strong> GUI/TUI support, folder monitoring, single binary distribution',
        tech: '<strong>Technology:</strong> Go, Fyne, FasterWhisper, OpenAI API',
        platform: '<strong>Platform:</strong> Windows, macOS (Apple Silicon supported)',
        linkGo: 'GitHub (Go version)',
        linkPython: 'GitHub (Python version)',
        linkSite: 'Product Page'
      },
      youtubeMojicopy: {
        title: 'YouTube MojiCopy',
        subtitle: 'Chrome Extension',
        feature: '<strong>Features:</strong> YouTube transcription copy with prompt save function',
        characteristics: '<strong>Characteristics:</strong> Direct paste to LLM with prompts like "Summarize" + transcription',
        tech: '<strong>Technology:</strong> JavaScript, Chrome Extension API',
        platform: '<strong>Platform:</strong> Integration with ChatGPT, Claude, and other LLMs',
        linkStore: 'Chrome Store'
      },
      notionTasker: {
        title: 'NotionTasker',
        subtitle: 'Notion Integration Chrome Extension',
        feature: '<strong>Features:</strong> Direct task/memo addition from web pages to Notion',
        tech: '<strong>Technology:</strong> JavaScript, Notion API, Chrome Extension',
        platform: '<strong>Platform:</strong> Integrated with Notion databases',
        linkStore: 'Chrome Store'
      },
      website: {
        title: 'Website Development',
        subtitle: 'Corporate Site & Landing Page Development',
        feature: '<strong>Features:</strong> Corporate sites, landing pages, blog sites',
        characteristics: '<strong>Characteristics:</strong> Responsive design, SEO optimization, fast loading',
        tech: '<strong>Technology:</strong> HTML/CSS, JavaScript, static site generators',
        support: '<strong>Support:</strong> Contact forms, analytics integration',
        linkContact: 'Contact'
      },
      webapp: {
        title: 'Web Applications',
        subtitle: 'Custom Business System Development',
        feature: '<strong>Features:</strong> Customer management, inventory management, booking systems, etc.',
        characteristics: '<strong>Characteristics:</strong> Full customization, database integration',
        tech: '<strong>Technology:</strong> JavaScript, React, Node.js, PostgreSQL',
        platform: '<strong>Platform:</strong> Cloud deployment on Vercel, Firebase, etc.',
        linkContact: 'Contact'
      },
      lineContact: {
        title: '💬 Contact us about our products',
        description: 'Feel free to contact us via LINE for details about product implementation',
        button: 'Contact via LINE'
      }
    },
    results: {
      meta: {
        title: 'Case Studies | infoHiroki',
        description: 'Generative AI implementation results at healthcare institutions, digital marketing companies, and more'
      },
      title: 'Case Studies',
      cases: {
        hospital: {
          title: 'General Hospital',
          subtitle: 'Healthcare - Whisper-based meeting minutes automation system',
          challenge: '<strong>Challenge:</strong> Spent 40 hours per month on meeting minutes creation',
          solution: '<strong>Solution:</strong> Voice recognition automation using OpenAI Whisper + <a href="/en/products#koemoji" style="color: #E73E8F; text-decoration: none;">Koemoji</a> system',
          outcome: '<strong>Outcome:</strong> 80% time reduction in minutes creation, ¥150,000/month cost reduction, zero transcription errors'
        },
        dental: {
          title: 'Community Dental Clinic',
          subtitle: 'Healthcare - Notion implementation support + business automation',
          challenge: '<strong>Challenge:</strong> Efficiency in patient management and email correspondence',
          solution: '<strong>Solution:</strong> Notion implementation + automated email draft function using GAS',
          outcome: '<strong>Outcome:</strong> Ongoing project with feature additions, improved business workflow'
        },
        nursing: {
          title: 'Home Nursing Care Service',
          subtitle: 'Healthcare - IT consulting & digitalization support',
          challenge: '<strong>Challenge:</strong> Web marketing and Notion utilization',
          solution: '<strong>Solution:</strong> AI technology implementation in web marketing, Notion operation support',
          outcome: '<strong>Outcome:</strong> Business digitalization promoted through IT consulting'
        },
        architecture: {
          title: 'Architecture Firm',
          subtitle: 'Architecture - Report workflow efficiency',
          challenge: '<strong>Challenge:</strong> Inspection data management and report creation',
          solution: '<strong>Solution:</strong> Macro automation, drone analysis results efficiency',
          outcome: '<strong>Outcome:</strong> Reduced report creation time, established data management system'
        },
        construction: {
          title: 'Construction Consulting',
          subtitle: 'Construction - On-site record automation',
          challenge: '<strong>Challenge:</strong> Efficiency in on-site meeting documentation',
          solution: '<strong>Solution:</strong> AI voice transcription system implementation',
          outcome: '<strong>Outcome:</strong> Streamlined on-site meeting documentation'
        },
        marketing: {
          title: 'Digital Marketing Company',
          subtitle: 'IT - Large language model utilization support',
          challenge: '<strong>Challenge:</strong> Content production efficiency and quality improvement',
          solution: '<strong>Solution:</strong> ChatGPT/Claude workflow construction',
          outcome: '<strong>Outcome:</strong> 3x production speed improvement, quality standardization'
        },
        restaurant: {
          title: 'Individual Restaurant',
          subtitle: 'Food Service - Business management system integration',
          challenge: '<strong>Challenge:</strong> Unification of inventory, daily reports, and sales management',
          solution: '<strong>Solution:</strong> Integrated management system construction',
          outcome: '<strong>Outcome:</strong> Business management efficiency, data unification'
        },
        production: {
          title: 'Production Company',
          subtitle: 'Entertainment - Notion implementation support',
          challenge: '<strong>Challenge:</strong> Project management unification and team collaboration',
          solution: '<strong>Solution:</strong> Notion database design and operation support',
          outcome: '<strong>Outcome:</strong> Improved information sharing, project progress visualization'
        },
        training: {
          title: 'AI Training Participant Companies',
          subtitle: 'Corporate Training - AI utilization skill acquisition support',
          challenge: '<strong>Challenge:</strong> Acquisition of AI utilization skills directly applicable to business',
          solution: '<strong>Solution:</strong> 4-hour × 4-session corporate AI training program',
          outcome: '<strong>Outcome:</strong> AI tool implementation and utilization guidance across industries'
        }
      },
      lineContact: {
        title: '💬 Contact us about implementation',
        description: 'Feel free to contact us via LINE about solutions that achieve similar results',
        button: 'Contact via LINE'
      }
    },
    about: {
      meta: {
        title: 'Skills | infoHiroki',
        description: 'Engineer Profile - Go/Python/Generative AI development tech stack'
      },
      title: 'Skills',
      programming: {
        title: 'Programming Languages',
        python: {
          title: 'Python',
          desc: 'Data analysis, AI/ML, web application development'
        },
        javascript: {
          title: 'JavaScript/TypeScript',
          desc: 'Frontend & backend development'
        },
        go: {
          title: 'Go',
          desc: 'Microservices, API development'
        },
        sql: {
          title: 'SQL',
          desc: 'PostgreSQL, MySQL, data analysis'
        }
      },
      frameworks: {
        title: 'Frameworks & Libraries',
        react: {
          title: 'React/Next.js',
          desc: 'Web application development, SSG/SSR'
        },
        fastapi: {
          title: 'FastAPI/Flask',
          desc: 'Lightweight Python web frameworks, REST API development'
        },
        nodejs: {
          title: 'Node.js/Express',
          desc: 'Backend API, real-time communication'
        },
        ml: {
          title: 'TensorFlow/PyTorch',
          desc: 'Machine learning, deep learning model development'
        }
      },
      ai: {
        title: 'AI & Machine Learning',
        llm: {
          title: 'LLM Utilization',
          desc: 'OpenAI API, Claude, custom GPT development'
        },
        dataAnalysis: {
          title: 'Data Analysis',
          desc: 'pandas, numpy, scikit-learn'
        },
        nlp: {
          title: 'Natural Language Processing',
          desc: 'Text analysis, sentiment analysis, document generation'
        },
        operations: {
          title: 'Model Operations',
          desc: 'API deployment, version control, script automation'
        }
      },
      infrastructure: {
        title: 'Infrastructure & Tools',
        cloud: {
          title: 'Cloud Services',
          desc: 'Vercel, Supabase, Firebase'
        },
        container: {
          title: 'Containers',
          desc: 'Docker, local development environment'
        },
        automation: {
          title: 'Automation',
          desc: 'GitHub Actions, deployment automation'
        },
        monitoring: {
          title: 'Analytics & Monitoring',
          desc: 'Google Analytics, Sentry, error tracking'
        }
      },
      tools: {
        title: 'Business Efficiency Tools',
        notion: {
          title: 'Notion',
          desc: 'Workspace design, API utilization, automation'
        },
        zapier: {
          title: 'Zapier/Make',
          desc: 'Workflow automation, system integration'
        },
        git: {
          title: 'Git/GitHub',
          desc: 'Version control, team development, OSS contribution'
        },
        pm: {
          title: 'Project Management',
          desc: 'Agile development, Scrum, Lean methodologies'
        }
      },
      lineContact: {
        title: '💬 Feel free to contact us',
        description: 'Contact us via LINE for technical concerns or business efficiency questions',
        button: 'Contact via LINE'
      }
    },
    faq: {
      meta: {
        title: 'FAQ | infoHiroki',
        description: 'Frequently asked questions about Generative AI implementation'
      },
      title: 'FAQ',
      items: {
        target: {
          q: 'Q. 🏢 What industries and company sizes do you target?',
          a: 'A. We primarily target <strong>SMEs and startups</strong>. We can work with any industry, with particular expertise in <strong>healthcare, construction, IT, manufacturing, and service industries</strong>. We support Generative AI implementation across diverse industries, from Whisper utilization at Sakurajuji Hospital to ChatGPT implementation at SMEs.'
        },
        flow: {
          q: 'Q. 📋 What is the process from inquiry to service start?',
          a: 'A. ① <strong>LINE inquiry</strong> → ② <strong>AI implementation consultation (¥20,000, 1.5 hours)</strong> → ③ <strong>Current situation analysis report + implementation proposal submission</strong> → ④ <strong>Contract (project or advisory)</strong> → ⑤ <strong>Service start</strong>. First, confirm specific benefits and costs through an AI implementation consultation.'
        },
        pricing: {
          q: 'Q. 💰 Please tell me about pricing plans and additional fees',
          a: 'A. <strong>Technical Advisor Service: ¥50,000/month</strong> (6-12 month contract), <strong>Generative AI Implementation Project: ¥200,000-5,000,000</strong> (based on company size), <strong>AI Implementation Consultation: ¥20,000/session</strong> (1.5 hours). Basically no additional fees, but we will consult you in advance if special software licenses are required.'
        },
        contract: {
          q: 'Q. ⏰ Are there contract period commitments?',
          a: 'A. <strong>Generative AI implementation projects are 2-6 months</strong> (depending on scale), <strong>Technical advisor service has 6 or 12-month contract periods</strong>. <strong>AI implementation consultation is one-time with no contract period commitment.</strong>'
        },
        online: {
          q: 'Q. 💻 Is online support available?',
          a: 'A. Yes, we can provide online support anywhere in the country. We use tools like Zoom, Teams, and Google Meet, and provide support through screen sharing and remote operations.'
        },
        security: {
          q: 'Q. 🔒 Is data security guaranteed?',
          a: 'A. Your data is strictly managed, and we can conclude non-disclosure agreements (NDA). We completely delete your data after work completion.'
        },
        tools: {
          q: 'Q. 🤖 What AI tools do you support?',
          a: 'A. We support a wide range of tools including <strong>ChatGPT, Claude, Gemini</strong> large language models, <strong>voice recognition AI (Whisper, etc.)</strong>, <strong>Google Apps Script, Excel VBA</strong>, <strong>Notion, voice transcription systems</strong>, and more. We propose optimal tools based on actual implementation track records.'
        },
        knowledge: {
          q: 'Q. ❓ Is it okay if I don\'t have technical knowledge?',
          a: 'A. Yes, technical knowledge is not required. If you can share your business challenges and areas for improvement, please leave all technical aspects to us. We will carefully teach you how to operate.'
        }
      },
      lineContact: {
        title: '💬 Have other questions?',
        description: 'If you have questions not covered in the FAQ, feel free to contact us via LINE',
        button: 'Ask via LINE'
      }
    },
    contact: {
      meta: {
        title: 'Contact | infoHiroki',
        description: 'Feel free to contact us about DX and Generative AI implementation for SMEs and startups'
      },
      title: 'Contact',
      intro: 'Engineers directly consult on DX and Generative AI implementation for SMEs and startups. Feel free to contact us.',
      line: {
        title: '🔥 Recommended: Contact via LINE',
        description: 'We can respond <strong>most quickly and reliably</strong>. Add our LINE official account using the button below and feel free to send us a message.',
        benefits: {
          title: 'Benefits of LINE Contact',
          instant: '✅ <strong>Immediate response</strong> - Real-time communication possible',
          casual: '✅ <strong>Casual consultation</strong> - Ask questions chat-style',
          fileShare: '✅ <strong>File sharing</strong> - Easy to send images and materials',
          free: '✅ <strong>Free consultation</strong> - First consultation is completely free'
        },
        qrText: 'Or scan this QR code with the LINE app:'
      },
      email: {
        title: '📧 Contact via Email',
        description: 'We also accept email contact. Please feel free to contact us at the address below.',
        note: '* Responses may take 2-3 business days. For urgent matters, please use LINE.'
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
