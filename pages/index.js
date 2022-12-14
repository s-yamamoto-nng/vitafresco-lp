import React from 'react'
import Image from 'next/image'
import Fruit from './img/fruit.jpg'
import VitaFrescoTop from './img/vitaFresco_top.jpg'
import vitaFrescoLogoImage from './img/top_image02.png'
import vitaFrescoTextImage from './img/vitaFrescoTextImage.png'
import kawaguchiPhoto from './img/kawaguchi.png'
import koyasuPhoto from './img/koyasu.png'
import hospitalLogo from './img/hospital.png'
import boardLogo from './img/board.png'
import medicineLogo from './img/medicine.png'
import developPhoto from './img/develop_img.png'
// import vitaFrescoBasicSmallText from './img/vitaFrescoBasic_small_text.png'
// import vitaFrescoPremiumSmallText from './img/vitaFrescoPremium_small_text.png'
import vitaFrescoBasicText from './img/vitaFrescoBasic_text.png'
import vitaFrescoPremiumText from './img/vitaFrescoPremium_text.png'
import vitaFrescoPhoto from './img/vitaFresco_image01.png'
import guestFirst from './img/guest01.png'
import guestSecond from './img/guest02.png'
import guestThird from './img/guest03.png'
import vitaFrescoImage2 from './img/vitaFresco_image02.png'
import vitaFrescoImage3 from './img/vitaFresco_image03.png'
import vitaFrescoImage4 from './img/vitaFresco_image04.png'
import vitaFrescoImage5 from './img/vitaFresco_image05.png'
import mailIcon from '../pages/img/mail-icon.png'
import phoneIcon from '../pages/img/phone-icon.png'

const Page = () => {
  return (
    <>
      {/*---------------------------------------------- head部 -----------------------------------------------------*/}
      {/* <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>高品質マルチビタミン&ミネラル・サプリメント Vita Fresco -</title>
      <meta
        name="description"
        content="Vita Frescoは、専門家が開発した毎日飲める医療機関用サプリメントです。"
      />
      <meta name="format-detection" content="telephone=no" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="webclip.png" />
      <meta property="og:site_name" content="Vita Fresco" />
      <meta property="og:url" content="URL(絶対パス)" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Vita Fresco - 専門家が開発した毎日飲める医療機関用サプリメント -"
      />
      <meta
        property="og:description"
        content="Vita Frescoは、専門家が開発した毎日飲める医療機関用サプリメントです。"
      />
      <meta property="og:image" content="URL(絶対パス)" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Vita Frescoは、専門家が開発した毎日飲める医療機関用サプリメントです。"
      />
      <meta name="twitter:image:src" content="URL(絶対パス)" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="css/style.css" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet"/>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        referrerpolicy="no-referrer"
      /> */}
      {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link> */}
      {/*------------------------------------------------ head部 -----------------------------------------------------*/}
      {/*------------------------------------------------ header部 ---------------------------------------------------*/}
      <header className="h-full">
        <div className="w-full lg:text-small">
          <div className="flex justify-center whitespace-nowrap items-center lg:flex-wrap bg-darkBlue-color p-3">
            <p className="mr-4 text-md border-solid border-2 border-white whitespace-nowrap p-1 text-center font-bold lg:mb-2 text-white lg:mr-1">
              <span className="block text-center">ご購入・</span>
              <span>お問い合せ先</span>
            </p>
            <div className="flex mr-2.5 font-bold whitespace-nowrap text-md font-bold text-white">
              <div className="mt-2 lg:w-5 lg:mt-1">
                <Image src={phoneIcon} />
              </div>
              <p className="font-bold text-3xl lg:text-lg text-kirakira-yellow">
                03-6820-1000
              </p>
            </div>
            <div className="text-md font-bold leading-4 text-white">
              <p>&lt;受付時間&gt;9:00〜18:00</p>
              <p>&lt;定休日&gt;木・日・祝</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:text-small">
          <div className="flex justify-center whitespace-nowrap items-center lg:flex-wrap bg-lightBlue-color p-3">
            <div className="text-md font-bold leading-4 text-white mr-10 lg:mr-2 lg:text-small">
              <p>株式会社オール・デンタル・ジャパン</p>
              <p>〒111-0052 東京都台東区柳橋2-5-6</p>
            </div>
            <div className="flex text-md font-bold leading-4 text-white">
              <div className="lg:w-3 lg:scale-150 mr-2">
                <Image src={mailIcon} />
              </div>
              <p className="text-lg xl:translate-y-2 lg:text-xs">
                info@all-dental-japan.com
              </p>
            </div>
          </div>
        </div>
      </header>
      {/*---------------------------------------------- header部 -----------------------------------------------------*/}
      {/*---------------------------------------------- main部 -----------------------------------------------------*/}
      <div className="w-full scale-x-100 -scale-y-100 -mt-2">
        <Image src={Fruit} />
      </div>
      <div className="w-1/3 lg:w-full m-auto absolute top-96  lg:top-40 left-1/3 lg:left-0 scale-150 lg:scale-75 lg:top-32">
        <div className="flex justify-between top-8 lg:top-4 items-end relative lg:text-sm">
          <p className="text-2xl">
            <span className="block text-shadow font-bold">
              高品質マルチビタミン&
            </span>
            <span className="font-bold text-shadow">ミネラルサプリメント</span>
          </p>
          <div className="bg-common-orange p-5 relative -top-3 lg:p-0 rounded-full z-10">
            <div className="relative rounded-full font-bold text-center w-32">
              <div className="lg:translate-y-6 translate-y-3 lg:h-32">
                <p className="tracking-tighter whitespace-nowrap text-lg lg:text-xs text-white">
                  マルチビタミン
                </p>
                <p className="text-white lg:text-xs">ミネラル</p>
                <p className="text-2xl text-yellow-300 lg:text-md">19種類</p>
                <p className="text-2xl lg:text-base text-white">配合</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-bold justify-between relative text-xs">
          <p className="relative top-8 lg:top-8">＜ビタフレスコ＞</p>
          <div className="relative top-8 lg:top-3">
            <Image src={vitaFrescoLogoImage} />
          </div>
        </div>
        <div>
          <Image className="" src={vitaFrescoTextImage} />
          <p className="text-xs text-right">※写真はイメージです。</p>
        </div>
      </div>
      <div className="w-full bg-common-orange text-center font-bold text-white p-5">
        <p className="text-3xl lg:text-xs">いつでもどこでも新鮮に飲む栄養、</p>
        <p className="text-3xl lg:text-xs">
          <span className="text-yellow-300">医療機関専用</span>サプリメント
        </p>
      </div>
      <div className="w-full">
        <Image src={VitaFrescoTop} />
      </div>
      <div className="bg-light-pink p-10 -mt-2 lg:p-2">
        <div className="l-container w-5/12 m-auto lg:w-full">
          <div className="bg-white rounded-lg p-5 lg:p-2">
            <div className="flex">
              <div className="font-bold lg:text-sm lg:w-screen w-10/12">
                <p className="text-2xl border-b-2 border-orange-400 border-dotted lg:text-sm">
                  川口美貴子<span>氏</span>
                </p>
                <p className="text-orange-color mb-2 text-md lg:text-small">
                  大妻女子大学 家政学部教授/管理栄養士(医学博士)
                </p>
              </div>
              <div className="rounded-full text-xl lg:text-xs lg:p-4 lg:h-12 bg-orange-color text-white font-bold p-4">
                <p className="translate-y-1 lg:-translate-y-2 lg:translate-x-0.5">
                  監修
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="m-2 w-screen">
                <Image src={kawaguchiPhoto} />
              </div>
              <p className="text-base lg:text-small">
                Vita Frescoには、私たちがいつまでも健やかな人生を送る上で
                欠かせない、そして体内では必要量を作れないビタミンとミネラ
                ルが19種類も含まれています。それぞれの栄養素は不足しても摂
                りすぎてもいけません。
                <br />
                Vita Frescoは、食べ物の入り口である「お口」を守る歯科医師、栄
                養のプロフェッショナルである管理栄養士、高品質のサプリメント開
                発のノウハウを持つ医療機関専用のサプリメントメーカーの三者
                が3年の時をかけてあなたのために開発したサプリメントです。
              </p>
            </div>
            <div className="flex">
              <div className="text-orange-400 p-3 m-2 lg:h-16 lg:p-2 whitespace-nowrap font-bold rounded bg-darkBlue-color text-white lg:h-full lg:pt-3 lg:pb-3 lg:m-0 lg:text-small lg:p-1">
                <p className="xl:translate-y-9 lg:translate-y-3 text-white lg:h-10">
                  プロフィール
                </p>
              </div>
              <div className="text-orange-400 font-bold text-md lg:text-small lg:ml-1">
                <p>
                  学生に臨床栄養学を教える傍ら、管理栄養士として幅広い活動を行なっている。大学での講
                  義、栄養と食事の指導や講演以外でも活動は多岐にわたる。「栄養バランス食事用食器
                  セット」を考案、発売。筑波大学サッカー部などのアスリートへの栄養指導も行っている。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 mt-10 lg:p-2">
            <div className="flex">
              <div className="font-bold lg:text-sm lg:w-screen w-10/12">
                <p className="text-2xl border-b-2 border-orange-400 border-dotted lg:text-sm">
                  子安　正洋<span>氏</span>
                </p>
                <p className="text-orange-color mb-2 text-md lg:text-small">
                  中目黒コヤス歯科　院長　歯科医院　歯学博士
                </p>
              </div>
              <div className="rounded-full text-xl lg:text-xs lg:p-4 lg:h-12 bg-orange-color text-white font-bold p-4">
                <p className="translate-y-1 lg:-translate-y-2 lg:translate-x-0.5">
                  監修
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="m-2 w-screen">
                <Image src={koyasuPhoto} />
              </div>
              <p className="text-base lg:text-small">
                本来、サプリメントは食品のため、それほどほど厳しい検査は
                課されていませんが病院やクリニックなど医療機関で取り扱うなど、「医療機関専用サプリメント」はとても厳しい条件の下で
                作られています。
                <br />
                ●原材料に農薬・有害金属・トランス脂肪酸などが含まれていないか？
                <br />
                ●添加物は安全、かつ必要最小限に抑えられているか？
                <br />
                ●記載されている栄養素の量が賞味期限内でしっかり保たれているか？
                <br />
                私たちは「医療機関専用サプリメントメーカー」とタッグを組み、あなたの大切な人に安心してプレゼントできるサプリメントを作りました。
              </p>
            </div>
            {/* <div className="flex">
              <div className="text-orange-400 p-3 m-2 lg:p-2 whitespace-nowrap font-bold bg-white rounded bg-orange-400 text-white lg:h-full lg:pt-3 lg:pb-3 lg:mt-4 lg:m-0 lg:text-small lg:p-1">
                <p className="translate-y-9 text-white">プロフィール</p>
              </div>
              <div className="text-orange-400 font-bold text-md lg:text-small lg:ml-1">
                <p>
                  学生に臨床栄養学を教える傍ら、管理栄養士として幅広い活動を行なっている。大学での講
                  義、栄養と食事の指導や講演以外でも活動は多岐にわたる。「栄養バランス食事用食器
                  セット」を考案、発売。筑波大学サッカー部などのアスリートへの栄養指導も行っている。
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-color text-center font-bold text-white p-5">
        <p className="text-3xl lg:text-xs">専門家が開発した毎日飲める</p>
        <p className="text-3xl lg:text-xs">
          <span className="text-lightOrange-color">医療機関専用</span>
          サプリメント
        </p>
        {/* <p className="text-3xl lg:text-xs">いつでもどこでも新鮮に飲む栄養、</p> */}
      </div>
      <div className="p-10 lg:p-8 bg-gradient-to-b from-lightHexadecimal-color to-hexadecimal-color pt-5">
        <div className="w-1/2 lg:w-full m-auto">
          <div className="text-center text-3xl lg:text-base mt-5 font-bold">
            <p>【歯科医師】</p>
            <p>【管理栄養士】</p>
            <p>【医療機関専用サプリメントメーカー】</p>
            <p>の三者</p>
            <p>3年の時をかけて開発した</p>
            <p>毎日飲めるサプリメント</p>
          </div>
          <div className="flex justify-center absolute z-10 w-full mt-10 whitespace-nowrap left-12 lg:-left-24 lg:translate-y-3 pt-5">
            <div className="vitaFresco">
              <p className="-translate-x-12 translate-y-1 text-3xl lg:text-base font-bold">
                ビタフレスコができるまで
              </p>
            </div>
            <div className="bg-darkBlue-color p-5 relative translate-y-5 -translate-x-24 -top-3 lg:p-0 rounded-full z-10 absolute left-64 lg:-translate-x-12 lg:-translate-y-0">
              <div className="relative rounded-full font-bold text-center w-24 h-24 lg:w-28 lg:h-28 lg:translate-y-2">
                <p className="tracking-tighter whitespace-nowrap text-3xl lg:text-bamd text-white p-1 border-b-2">
                  開発
                </p>
                <p className="text-white text-3xl lg:text-ms">秘話</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 lg:p-5 pt-32 w-10/12 lg:w-full my-12 mx-auto lg:pt-24">
            <div className="pt-12">
              <Image src={developPhoto} />
            </div>
            <div className="">
              <p className="text-blue-800 font-bold border-t-2 border-b-2 border-yellow-200 mt-3 p-3">
                「管理栄養士　川口美貴子先生」と共同開発したサプリメントです！
              </p>
              <div className="font-bold mt-5">
                <p>
                  私自身、身体の為にサプリメントを飲むように気を付けていました。
                </p>
                <p>
                  そんな中、一ヶ月もしなうちにカプセルが変色してしまったり、栄養を気遣うばかりサプリメントの種類がだんだん増えてしまい飲むことが億劫になった経験がありました。
                </p>
                <p>
                  次は、ボトルタイプに挑戦してみるが飲む量よりも多く出てしまって戻すなどの手間が起きたり、最後の方の粒は温度で色が変わり飲めなくなってしまいました。
                </p>
                <p>
                  その次に、タブレットタイプも試してみるが、やはり添加物等が気になってしまい継続することが出来ませんでした。
                </p>
                <p>
                  そんな自身の経験を元にいつでもどこでも安心して飲めるサプリメントを作りたいという想いから「Vita
                  Fresco」を開発したのです。
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  &#9678;必要なビタミン・ミネラルを、1つずつ揃えて飲むのは手間がかかる。
                </p>
                <p className="text-blue-600 font-bold">
                  &rArr;個包装にしました。
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  &#9678;多種類のサプリメントを合わせて飲むと、結果として飲み過ぎになる心配がある。
                </p>
                <p className="font-bold text-blue-700">
                  &rArr;適量がセットされているので安心して飲めます。
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  &#9678;必要なビタミン・ミネラルをセットにしたとき、当初、大小様々な大きさの粒であったが、粒の大きさが違うと誤飲しやすい。
                </p>
                <p className="font-bold text-blue-700">
                  &rArr;コストはかかったが、粒の大きさを揃えました。
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  &#9678;タブレットは、固形化するための財形剤が必要となり、一般的にカプセルより多くの添加物を使用する。
                </p>
                <p className="font-bold text-blue-700">
                  &rArr;カプセルの方が添加物の使用料を減らせます。
                </p>
                <p className="font-bold text-blue-700">
                  &rArr;(製造元　株式会社ヘルシーパス)
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  &#9678;吸収性ですが、カプセル・タブレットとも崩壊すれば吸収率に大きな違いはない。ただし、国民生活センターが100銘柄の市販サプリメントをためした結果、
                  42銘柄が規定時間内に崩壊しなかったとの報告があります。こちらは、剤型自体の特徴ではなく、タブレットの場合は「使用される添加物の種類や圧縮度」、
                  カプセルの場合は「カプセルの品質」の問題と思われます。
                </p>
                <p className="font-bold text-blue-700">
                  &rArr;「VitaFresco」は、第三者機関によって崩壊性の検査を実施、合格済みです。
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  &#9678;毎日飲むものとして、原材料が確かなものか非常に気になる。
                </p>
                <p className="font-bold text-blue-700">
                  &rArr;各種安全性試験により厳選した原料を使用して、GMP基準を満たした国内工場で製造しているので、安心して毎日飲めます。
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  &#9678;外食が多い、食事の栄養素の偏りがある方は、一部栄養素の不足により、せっかく摂った他の栄養素が十分に活用されない恐れがある(ドベネックの樽の心理)
                  <br />
                  例)トランス脂肪酸、酸化度、加速試験と成分検査
                  <br />
                  (賞味期限設定のための科学的試験)
                </p>
                <p className="font-bold text-blue-700">
                  &rArr;全ての栄養素がまんべんなく摂れるようにしました。
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="bg-white flex rounded-full p-10 h-64 lg:h-48">
              <div className="font-bold text-white text-2xl h-14 bg-orange-600 rounded-full p-5 absolute -translate-y-10 -translate-x-7">
                <p className="-translate-y-2">
                  <span>1</span>
                </p>
              </div>
              <div className="font-bold text-center -translate-y-5">
                <Image src={hospitalLogo} />
                <p className="text-orange-600 text-2xl lg:text-sm whitespace-nowrap">
                  医療機関専用
                </p>
                <p className="text-md lg:text-xs whitespace-nowrap">
                  であるということ
                </p>
              </div>
            </div>
            <div className="font-bold text-xl lg:text-base m-5">
              <p>
                大切な人に
                <br />
                安心して贈れるサプリメントを
                <br />
                お届けしたいから、
                <br />
                品質第一。
              </p>
            </div>
          </div>
          <div className="flex mt-5 flex-row-reverse">
            <div className="bg-white flex rounded-full p-10 h-64 lg:h-48">
              <div className="font-bold text-white text-2xl h-14 bg-orange-600 rounded-full p-5 absolute -translate-y-10 -translate-x-7">
                <p className="-translate-y-2">
                  <span>2</span>
                </p>
              </div>
              <div className="font-bold text-center -translate-y-5">
                <Image src={boardLogo} />
                <p className="text-orange-600 text-2xl lg:text-sm whitespace-nowrap">
                  厳しい検査基準
                </p>
                <p className="text-md lg:text-xs whitespace-nowrap">
                  を設けた製造過程
                </p>
              </div>
            </div>
            <div className="font-bold text-xl lg:text-base m-5 translate-y-20 lg:translate-y-8 text-right">
              <p>
                原料受け入れから保管まで、
                <br />
                念入りに検査と
                <br />
                チェックを繰り返します。
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="bg-white flex rounded-full p-10 h-64 lg:h-48">
              <div className="font-bold text-white text-2xl h-14 bg-orange-600 rounded-full p-5 absolute -translate-y-10 -translate-x-7">
                <p className="-translate-y-2">
                  <span>3</span>
                </p>
              </div>
              <div className="font-bold text-center -translate-y-5 lg:translate-y-0.5">
                <Image src={medicineLogo} />
                <p className="text-orange-600 text-2xl lg:text-xs whitespace-nowrap">
                  常に新鮮だから
                </p>
                <p className="text-md lg:text-xs whitespace-nowrap">
                  毎日どこでも摂取
                </p>
              </div>
            </div>
            <div className="font-bold text-xl lg:text-base m-5 translate-y-32 lg:translate-y-8">
              <p>
                1包1回分ですので、
                <br />
                出張先やご旅行へ持ち運びやすく、
                <br />
                いつでも衛生的。
              </p>
            </div>
          </div>
          <div className="text-center font-bold text-white text-2xl rounded-full p-1 mt-5 bg-gradient-to-t from-light-orange to-orange-600 border-light-orange border-4">
            <button>今すぐ購入する</button>
          </div>
        </div>
      </div>
      <div className="text-center content-center bg-blue-color p-5 pb-10">
        <div className="block scale-75 lg:scale-90">
          <Image src={vitaFrescoTextImage} />
        </div>
        <div className="font-bold text-3xl lg:text-base text-white">
          {/* <p className="m-2"><div className="inline-block text-orange-200 transform scale-150">・</div>商品に込めた思い<div className="inline-block text-orange-200 transform scale-150">・</div></p> */}
          <p className="m-2">「新鮮であり続けるために」</p>
        </div>
        <div className="font-bold text-white text-lg lg:text-small">
          <p className="m-1">
            「Vita」はビタミン、「Fresco」はイタリア語で「新鮮」を意味します。
          </p>
          <p className="m-1">あなたに「Fresco」な栄養をお届けしたい。</p>
          <p className="m-1">
            あなた自身にいつまでも「Fresco」であり続けてほしい。
          </p>
          <p className="m-1">カプセルの大きさを揃えて1包1回分ですので、</p>
          <p className="m-1">お仕事やご旅行に持ち運びやすく、</p>
          <p className="m-1">衛生的にも優れています。</p>
          <p className="m-1">手軽に安心な「Fresco」をぜひ、ご体験ください。</p>
        </div>
        <div className="mt-10">
          <Image src={vitaFrescoPhoto} />
        </div>
      </div>
      <div className="w-full p-5 bg-white">
        <div className="w-1/2 lg:w-full m-auto">
          <div className="text-center font-bold text-white text-lg bg-user-color rounded-full p-2">
            <p className="text-2xl">お客様の声</p>
          </div>
          <div className="flex mt-5 mb-5 border-b-1 border-user-color">
            <div className="lg:mr-5 mb-3 w-9/12 text-center lg:w-full">
              <Image src={guestFirst} />
              <p className="font-bold text-center text-xl lg:text-sm">
                【女性　30代】
              </p>
            </div>
            <div className="text-xl lg:text-xs">
              <p>美容に気を付けてる30代前半女性</p>
              <p className="break-word">
                VitaFrescoは医療用のサプリなので高品質で安心です。
              </p>
              <p>
                またカプセルなのでタブレットよりも吸収性が良く不純物が入ってないところもお気に入りの理由です！
              </p>
              <p>
                1包1回分なのでいつでも新鮮な状態で気分もいいですしお守り代わりにいつもバックの中に常備しています！
              </p>
              <p>
                女性に必要なカルシウムや鉄分が入っているので疲れた時などは青と白、両方飲んでいます！
              </p>
            </div>
          </div>
          <div className="flex mt-5 mb-5 border-b-1 border-user-color">
            <div className="lg:mr-5 mb-3 w-9/12 text-center lg:w-full">
              <Image src={guestSecond} />
              <p className="font-bold text-center text-xl lg:text-sm">
                【男性　30代】
              </p>
            </div>
            <div className="text-xl lg:text-xs">
              <p>カップラーメンばっかり食べてる独身男性</p>
              <p className="break-word">
                一人暮らしでどうしてもインスタントラーメンやコンビニのお弁当など偏った食事が多くなってしまい・・・。
              </p>
              <p>食生活が気になってサプリメントをボトルで買ったのですが、</p>
            </div>
          </div>
          <div className="flex mt-5 mb-5">
            <div className="mr-5 mb-3 w-full text-center lg:scale-125 lg:mr-10 lg:translate-y-10 lg:translate-x-2 ">
              <Image src={guestThird} />
              <p className="font-bold text-center text-xl lg:text-xs">
                【仲良しシニア】
                <br />
                アクティブシニア
              </p>
            </div>
            <div className="text-xl lg:text-small">
              <p>健康に気を付けてる高齢者</p>
              <p>孫が、「VITA FRESCO」をプレゼントしてくれました。</p>
              <p>VITA FRESCOは辺粒が揃ってるから私たちでも飲みやすいのです。</p>
              <p>
                個包装になっているので私でも飲む量がわかりやいですし、大学の管理栄養士の先生が監修してくれているので、私たちも安心して飲めます。
              </p>
              <p>
                いつまでも健康でいたいから食事時の際に必ず飲むことが習慣化しています。
              </p>
              <p>
                いつまでも健康でいたいから食事時の際に必ず飲むことが今では習慣化しています。
              </p>
              <p>
                プレゼントしてくれた孫のおかげで毎日楽しく過ごせています！ありがとう！
              </p>
            </div>
          </div>
          <div className="text-center font-bold text-white text-2xl rounded-full p-1 mt-5 bg-gradient-to-t from-light-orange to-orange-600 border-light-orange border-4">
            <button>今すぐ購入する</button>
          </div>
        </div>
      </div>
      <section className="bg-blue-color pb-5 w-full p-16 lg:p-8 lg:pt-16">
        <div className="w-1/2 m-auto lg:w-full">
          <div className="flex justify-center">
            <div className="font-bold text-lg text-white">
              <p className="text-2xl lg:text-base whitespace-nowrap">
                ▶︎毎日の健康管理に
              </p>
              <Image className="" src={vitaFrescoBasicText} />
              <div className="bg-white text-sm text-center">
                <p className="text-2xl lg:text-sm text-light-blue">
                  ベーシック
                </p>
                <p className="text-sm text-light-blue">(栄養成分表示)</p>
              </div>
              <div className="border-l-3 border-blue-300 pl-2 mt-5 lg:text-small">
                <p>30包(1包当たり2.28g)</p>
                <p>ハードカプセル×6粒</p>
              </div>
            </div>
            <div>
              <div className="rounded-full p-3 bg-darkBlue-color w-24 h-24 absolute z-10 translate-x-40 -translate-y-10 lg:left-32">
                <p className="text-white text-md translate-y-2 translate-x-2">
                  <span className="text-4xl">30</span>包
                </p>
              </div>
              <Image src={vitaFrescoImage2} />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Image src={vitaFrescoImage3} />
          </div>
          <table className="border-black border-2 w-full bg-white font-bold lg:text-xs mt-10 whitespace-nowrap">
            <tbody>
              <tr>
                <td className="border-x-2 border-black bg-white">エネルギー</td>
                <td className="border-x-2 border-black">7.96kcal</td>
                <td className="border-x-2 border-black bg-white">ビタミンB6</td>
                <td>20.0mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">たんぱく質</td>
                <td className="border-x-2 border-black">0.17g</td>
                <td className="border-x-2 border-black">ビオチン</td>
                <td>150μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">脂質</td>
                <td className="border-x-2 border-black">0.29g</td>
                <td className="border-x-2 border-black">葉酸</td>
                <td>200μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">炭水化物</td>
                <td className="border-x-2 border-black">1.16g</td>
                <td className="border-x-2 border-black">ビタミンB12</td>
                <td>50.0μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ナトリウム</td>
                <td className="border-x-2 border-black">
                  1.32mg
                  <br />
                  (食塩相当量0.003g)
                </td>
                <td className="border-x-2 border-black">ビタミンC</td>
                <td>200mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンA</td>
                <td className="border-x-2 border-black">420μg</td>
                <td className="border-x-2 border-black">カルシウム</td>
                <td>150mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンD</td>
                <td className="border-x-2 border-black">25.0μg</td>
                <td className="border-x-2 border-black">マグネシウム</td>
                <td>90mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンE</td>
                <td className="border-x-2 border-black">134.0mg</td>
                <td className="border-x-2 border-black text-red-600">亜鉛</td>
                <td className="text-red-600">15.0mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンB1</td>
                <td className="border-x-2 border-black">25.0mg</td>
                <td className="border-x-2 border-black">銅</td>
                <td>1.5mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンB2</td>
                <td className="border-x-2 border-black">25.0mg</td>
                <td className="border-x-2 border-black">セレン</td>
                <td>50μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ナイアシン</td>
                <td className="border-x-2 border-black">15mg</td>
                <td className="border-x-2 border-black">クロム</td>
                <td>100μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">パントテン酸</td>
                <td className="border-x-2 border-black">25.0mg</td>
                <td className="border-x-2 border-black text-red-600">鉄</td>
                <td className="text-red-600">3.5mg</td>
              </tr>
            </tbody>
          </table>
          <div className="font-bold lg:text-small whitespace-nowrap text-right">
            <p className="mt-5">
              <span className="text-red-600 bg-white rounded-full p-2">
                ※赤字：特筆すべき含有栄養素
              </span>
              <span className="text-white">
                【開発協力】株式会社ヘルシーパス
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-color pb-5 w-full p-16 lg:p-8 lg:pt-16">
        <div className="w-1/2 m-auto lg:w-full">
          <div className="flex justify-center">
            <div className="font-bold text-lg text-white">
              <p className="text-2xl text-blue-color lg:text-base">
                ▶︎毎日の健康管理に
              </p>
              <Image className="" src={vitaFrescoPremiumText} />
              <div className="bg-blue-color text-center">
                <p className="text-2xl lg:text-sm">ベーシック</p>
                <p className="text-sm">(栄養成分表示)</p>
              </div>
              <div className="mt-5 border-l-3 border-blue-color pl-2 text-blue-color lg:text-small">
                <p>30包(1包当たり2.28g)</p>
                <p>ハードカプセル×6粒</p>
              </div>
            </div>
            <div>
              <div className="rounded-full p-3 bg-blue-color w-24 h-24 absolute z-10 translate-x-40 -translate-y-10 lg:left-32">
                <p className="text-white text-md translate-y-2 translate-x-2">
                  <span className="text-4xl">30</span>包
                </p>
              </div>
              <Image src={vitaFrescoImage4} />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Image src={vitaFrescoImage5} />
          </div>
          <table className="border-black border-2 w-full font-bold lg:text-xs mt-10 whitespace-nowrap">
            <tbody>
              <tr>
                <td className="border-x-2 border-black">エネルギー</td>
                <td className="border-x-2 border-black">14.53kcal</td>
                <td className="border-x-2 border-black">ビタミンB6</td>
                <td>20.0mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">たんぱく質</td>
                <td className="border-x-2 border-black">0.36g</td>
                <td className="border-x-2 border-black">ビオチン</td>
                <td>150μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">脂質</td>
                <td className="border-x-2 border-black">0.86g</td>
                <td className="border-x-2 border-black">葉酸</td>
                <td>200μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">炭水化物</td>
                <td className="border-x-2 border-black">1.33g</td>
                <td className="border-x-2 border-black">ビタミンB12</td>
                <td>ピ50.0μg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ナトリウム</td>
                <td className="border-x-2 border-black">
                  1.39mg
                  <br />
                  (食塩相当量0.003g)
                </td>
                <td className="border-x-2 border-black">ビタミンC</td>
                <td>200mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンK</td>
                <td className="border-x-2 border-black">45.0μg</td>
                <td className="border-x-2 border-black">マグネシウム</td>
                <td>150mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンB1</td>
                <td className="border-x-2 border-black">25.0μg</td>
                <td className="border-x-2 border-black text-red-600">EPA</td>
                <td className="text-red-600">116mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ビタミンB2</td>
                <td className="border-x-2 border-black">25.0mg</td>
                <td className="border-x-2 border-black text-red-600">DHA</td>
                <td className="text-red-600">49.0mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">ナイアシン</td>
                <td className="border-x-2 border-black">15mg</td>
                <td className="border-x-2 border-black text-red-600">
                  α-リノレン酸
                </td>
                <td className="text-red-600">28mg</td>
              </tr>
              <tr>
                <td className="border-x-2 border-black">パントテン酸</td>
                <td className="border-x-2 border-black">25.0mg</td>
                <td className="border-x-2 border-black text-red-600">
                  γ-リノレン酸
                </td>
                <td className="text-red-600">36mg</td>
              </tr>
            </tbody>
          </table>
          <div className="font-bold lg:text-small whitespace-nowrap text-right">
            <p className="mt-5">
              <span className="text-red-600 bg-white rounded-full p-2">
                ※赤字：特筆すべき含有栄養素
              </span>
              <span>【開発協力】株式会社ヘルシーパス</span>
            </p>
          </div>
        </div>
      </section>
      <div className="bg-darkBlue-color">
        <p className="text-white font-bold text-center text-2xl lg:text-base p-3">
          ▶︎気の抜けない時は
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2 bg-blue-color text-white font-bold text-right">
          <Image
            className="scale-75 -translate-x-2"
            src={vitaFrescoBasicText}
          />
        </div>
        <div className="absolute p-1 h-12 w-12 bg-white rounded-full left-1/2 -translate-x-6 translate-y-6 lg:translate-y-8 z-10">
          <p className="text-5xl -translate-y-5 translate-x-1 text-orange-500">
            +
          </p>
        </div>
        <div className="p-3 lg:p-3 w-1/2 pl-7 bg-light-gray text-light-blue font-bold">
          <div className=" lg:translate-x-3 lg:translate-y-1">
            <Image src={vitaFrescoPremiumText} />
          </div>
        </div>
      </div>
      <div className="bg-darkBlue-color text-center text-2xl lg:text-base p-3">
        <p className="text-white font-bold lg:text-small lg:pr-10">
          ベーシックとプレミアムを合わせてご使用ください
        </p>
        <div className="absolute bg-common-orange rounded-full z-10 rounded-full font-bold text-center w-36 h-36 lg:h-20 lg:w-20 xl:right-72 xl:-translate-y-24 lg:right-2 lg:-translate-y-12">
          <p className="text-sm text-white pt-10 lg:pt-5 lg:text-small">
            インプラントや
            <br />
            オペ後にも
            <br />
            最適！
          </p>
        </div>
      </div>
      <div className="bg-white mt-5 mb-5 p-6 lg:p-2">
        <div className="w-1/2 m-auto lg:w-full">
          <div className="text-center cursor-pointer font-bold text-white text-2xl rounded-full xl:p-1 bg-gradient-to-t from-light-orange to-orange-600 border-light-orange border-4">
            <a href="https://adjshop.buyshop.jp/" target="__blank">
              今すぐ購入する
            </a>
          </div>
        </div>
      </div>
      <footer className="h-24 bg-lightBlue-color">
        <div className="w-full lg:text-small">
          <div className="flex justify-center whitespace-nowrap items-center lg:flex-wrap bg-blue-900 p-3">
            <p className="mr-4 lg:mr-2 text-md border-solid border-2 border-white whitespace-nowrap p-1 text-center font-bold lg:mb-2 text-white">
              <span className="block text-center">ご購入・</span>
              <span>お問い合せ先</span>
            </p>
            <div className="flex mr-2.5 font-bold whitespace-nowrap text-md font-bold text-white">
              <div className="mt-2 lg:w-5 lg:mt-1">
                <Image src={phoneIcon} />
              </div>
              <p className="font-bold text-3xl lg:text-lg text-lightOrange-color">
                03-6820-1000
              </p>
            </div>
            <div className="text-md font-bold leading-4 text-white">
              <p>&lt;受付時間&gt;9:00〜18:00</p>
              <p>&lt;定休日&gt;木・日・祝</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:text-small">
          <div className="flex justify-center whitespace-nowrap items-center lg:flex-wrap bg-blue-600 p-3">
            <div className="text-md font-bold leading-4 text-white mr-10 lg:mr-2">
              <p>株式会社オール・デンタル・ジャパン</p>
              <p>〒111-0052 東京都台東区柳橋2-5-6</p>
            </div>
            <div className="flex text-md font-bold leading-4 text-white">
              <div className="lg:w-3 lg:scale-150">
                <Image src={mailIcon} />
              </div>
              <p className="text-lg lg:text-xs translate-y-1.5 translate-x-2 lg:-translate-y-0.5">
                info@all-dental-japan.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*---------------------------------------------- main部 -----------------------------------------------------*/}
    </>
  )
}

export default Page
