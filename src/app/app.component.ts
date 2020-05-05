import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  data = {
    title: 'newCreator.org',
    owner: '2020 - newCreator.org',
    // attributions: [
    //   '© 2020 - newCreator.org'
    // ],
    account: {
      gitHub: 'https://github.com/newcreator-org',
      facebook: 'https://www.facebook.com/newcreator.org',
      twitter: 'https://twitter.com/nC_org'
    },
    menues: [
      {
        label: 'サービスサイト',
        url: 'https://www.new.or.jp/'
      }
    ],
    contents: {
      hero: {
        mainText: 'いまの「まなび」がミライをつくる。',
        subText: '特定非営利活動法人ニュークリエイター・オルグ',
        //actionLabel: 'ボタン',
        coverURL: './assets/img/TOP.jpg'
      },
      concept: {
        title: 'プログラミング教育が必修化されましたが…',
        description: '2020年度から小学校においてプログラミングが必修化されました。お子様の学びに不安がある保護者様も多いのではないでしょうか。ニュークリエイターはそんな皆さまを全力でサポートします。',
        clipURL: './assets/img/2842680.jpg'
      },
      features: [
        {
          imageURL: './assets/img/platform.png',
          title: '教材プラットフォーム事業',
          description: 'オープンソースの教材提供プラットフォームを運用しています。',
          // actionLabel: 'newcreator.net',
          // actionURL: ''
          // .netとdev_textbook 
        },
        {
          imageURL: './assets/img/school.png',
          title: '教室事業',
          description: 'プログラミングや理科を子どもたちに楽しく学んでもらえる教室を運営しています。',
          // actionLabel: 'リンク',
          // actionURL: ''
          //newCreator, telelab
        },
        {
          imageURL: './assets/img/media.png',
          title: 'メディア事業',
          description: '小中学生を対象としたプログラミングについての記事を扱うメディアを運営しています。',
          actionLabel: 'Miravii',
          actionURL: 'https://miravii.com'
          //miravii
        },
        {
          imageURL: './assets/img/2842680.jpg',
          title: '受託開発事業',
          description: 'ウェブページの製作などを受注しています。',
          // actionLabel: 'リンク',
          // actionURL: ''
          //newCreator, telelab
        }
      ],
      medias: [
        {
          name: '項目1',
          logoURL: './assets/img/2842680.jpg',
          website: ''
        }
      ],
      faqs: [
        {
          question: 'newCreator.orgとは？',
          answer: '次世代の学びをオープンに制作し、提供するNPO法人です。\nプログラミングや理科の教材を開発し、これらの媒体や設計データをオープンソース公開しています。\n また、それらの教材を活用したイベント開催などもしています。イベント等の詳細はサービスサイト （https://www.new.or.jp/）をご覧ください。',
        },
        {
          question: 'newCreator.netって何？',
          answer: 'オープンソース教材に準拠した、様々な着眼点からのプログラミング教材配信プラットフォームです。\n小学生、中学生の様々な観点からのプログラミングの学び方に対応しています。',
        },
        // {
        //   question: '教育の品質はどうなの…？',
        //   answer: '',
        // },
        {
          question: 'なにかお手伝いできることはありますか？',
          answer: 'newCreator.orgでは、様々な立場から関わってくださる方を募集しています！\n ご興味のあるかたはcontact@newcreator.orgまでお問い合わせください。',
        }
      ],
      "voices": [
        {
          "name": "改野 由尚",
          "position": "理事長",
          "photoURL": "https://static.camp-fire.jp/uploads/user/profile_image/565390/edLIM_MH_400x400.jpg?ixlib=rails-2.1.4&auto=format",
          "comment": "慶應義塾大学1年。学業の傍らで行なったインターンシップやフリーランス、スタートアップ創業などを経て、ニュークリエイター・オルグを設立、理事長に就任。現在もほか数社でフリーランスでエンジニア、UIデザイナー、WEBマーケターとして活動中。"
        },
        {
          "name": "浅賀 巧匠",
          "position": "副理事長",
          "photoURL": "https://asaga.work/profile.jpg",
          "comment": "筑波大学2年。NPO法人ハックジャパン時代からnew Creator事業に参画し、2020年1月にニュークリエイター・オルグの副理事長に就任した。"
        },
        {
          "name": "小山 優輝",
          "position": "理事",
          "photoURL": "data:image/jpeg;base64,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",
          "comment": "オーストラリア アデレード大学3年。NPO法人ハックジャパンの代表理事も兼任し、多方面で活躍する。"
        }
      ]
    },

  };

  action() {
    // ヒーローコンポーネントのアクションボタンをクリックした時に実行されます
  }
}
