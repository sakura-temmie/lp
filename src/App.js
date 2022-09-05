import React, { useState } from 'react'
import TopImg from "./img/top.png";
import AppleIcon from "./img/dl_icon_apple.png";
import GoogleIcon from "./img/dl_icon_google.png";
import Title1 from "./img/title1.png";
import Title2 from "./img/title2.png";
import Title3 from "./img/title3.png";
import Title4 from "./img/title4.png";
import Title5 from "./img/title5_news.png";
import Point1 from "./img/canIcon/1.png";
import Point2 from "./img/canIcon/2.png";
import Point3 from "./img/canIcon/3.png";
import Point4 from "./img/canIcon/4.png";
import Point5 from "./img/canIcon/5.png";
import Point6 from "./img/canIcon/6.png";
import Point7 from "./img/canIcon/7.png";
import Point8 from "./img/canIcon/8.png";
import tag1 from "./img/icon/57xxxhdpi.png";
import tag2 from "./img/icon/58xxxhdpi.png";
import tag3 from "./img/icon/59xxxhdpi.png";
import tag4 from "./img/icon/60xxxhdpi.png";
import Contents3 from "./img/title3_contents.png";
import Contents4 from "./img/title4_contents.png";
import NewsContents from "./img/title5_news_contents.png";
import Title6 from "./img/title6_contact.png";
import ContactButton from "./img/title6_contact_contents2.png";
import Bottom from "./img/bottom.png";
import mov1 from "./img/movie/A動画でグルメを投稿閲覧.mp4";
import mov2 from "./img/movie/B地図で簡単にお店を発見.mp4";
import mov3 from "./img/movie/C気になるお店情報を保存.mp4";
import mov4 from "./img/movie/Dお店の詳細情報をチェック.mp4";
import './App.scss';

function App() {
  // const videoRef = useRef(null);
  // const videoRef1 = useRef(null);
  // const videoRef2 = useRef(null);
  // const videoRef3 = useRef(null);
  //   useEffect(() => {
  //       videoRef.current?.play();
  //       videoRef1.current?.play();
  //       videoRef2.current?.play();
  //       videoRef3.current?.play();
  //   }, []);

  const [mailBody, setMailBody] = useState('')
  const [mailName, setMailName] = useState('')

  const mailto = `mailto:popdish.contact@gmail.com?subject=お名前：${mailName}&body=${mailBody}`

  return (
    <div className="App">
      {/* トップビュー */}
      <img src={TopImg} className="top-img" alt="logo" />

      {/* コンテンツ部分 */}
      <div className="container">


      {/* アイコン */}
        <div className="top-icon">
          <a href="https://apps.apple.com/us/app/popdish/id1618467447?itsct=apps_box_badge&amp;itscg=30200">
            <img src={AppleIcon} className="dl-icon-apple" alt="logo" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.popdish.android">
            <img src={GoogleIcon} className="dl-icon-google" alt="logo" />
          </a>
        </div>

      {/*  Popdish とは */}
      <div className="about">
        <img src={Title1} className="title" alt="logo" />
          <p>Popdishとは、動画と地図でグルメ情報を投稿検索でき、</p>
          <p>気になるお店情報の保存や、好みが近いユーザーのフォローもできる、</p>
          <p>新感覚のグルメ動画SNS。</p>
          <br />
          <p>「今食べたい」が、すぐに見つかる。</p>
      </div>

      {/*  Popdish で何ができるの */}
        <div className="why-popdish">
          <img src={Title2} className="title" alt="logo" />
          <div className="img-row">
            <div>
              <img src={Point1} alt="logo" />
              <p>グルメ動画の<br/>投稿と視聴</p>
            </div>
            <div>
              <img src={Point2} alt="logo" />
              <p>地図での<br/>お店検索</p>
            </div>
            <div>
              <img src={Point3} alt="logo" />
              <p>動画への<br/>いいね！</p>
            </div>
            <div>
              <img src={Point4} alt="logo" />
              <p>お気に入り<br/>を保存</p>
            </div>
          </div>
          <div className="img-row">
            <div>
              <img src={Point5} className="" alt="logo" />
              <p>コメントや<br/>お店の登録</p>
            </div>
            <div>
              <img src={Point6} className="" alt="logo" />
              <p>お店電話予約や<br/>営業時間の確認</p>
            </div>
            <div>
              <img src={Point7} className="" alt="logo" />
              <p>料理ジャンルで<br/>お店の検索</p>
            </div>
            <div>
              <img src={Point8} className="" alt="logo" />
              <p>ユーザーの<br/>フォロー機能</p>
            </div>
          </div>
          <div className="mov-row">

            <div className="mov-col">
              <img src={tag1} className="" alt="logo" />
              <video autoplay loop muted  width="20%">
                <source src={mov3} type="video/mp4" />
              </video>
            </div>

            <div className="mov-col">
            <img src={tag2} className="" alt="logo" />
              <video autoplay loop muted  width="20%">
                <source src={mov2} type="video/mp4" />
              </video>
            </div>

            <div className="mov-col">
            <img src={tag3} className="" alt="logo" />
              <video autoplay loop muted  width="20%">
                <source src={mov4} type="video/mp4" />
              </video>
            </div>

            <div className="mov-col">
                <img src={tag4} className="" alt="logo" />
              <video autoplay loop muted  width="20%">
                <source src={mov1} type="video/mp4" />
              </video>
            </div>

          </div>
        </div>

        {/*  Popdish で探せる料理ジャンル一覧 */}
        <div className="genre">
          <img src={Title3} className="title" alt="logo" />
          <img src={Contents3} className="contents" alt="logo" />
        </div>

      {/*  Popdish で何ができるの */}
        <div className="can">
          <img src={Title4} className="title" alt="logo" />
          <img src={Contents4} className="contents" alt="logo" />
        </div>

      {/*  NEWS */}
        <div className="news">
          <img src={Title5} className="title" alt="logo" />
          <img src={NewsContents} className="contents" alt="logo" />
        </div>

             <div className="bottom-icon">
          <a href="https://apps.apple.com/us/app/popdish/id1618467447?itsct=apps_box_badge&amp;itscg=30200">
            <img src={AppleIcon} className="dl-icon-apple" alt="logo" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.popdish.android">
            <img src={GoogleIcon} className="dl-icon-google" alt="logo" />
          </a>
        </div>

        <div className="contact">
          <img src={Title6} className="title" alt="logo" />
          <div className="contact-input">
            <p>NAME<span>*</span></p>
            <input type="text" onChange={(e) => setMailName(e.target.value)} />
            <p>MASSAGE</p>
            <textarea rows="4" cols="40" onChange={(e) => setMailBody(e.target.value)} />
          </div>
          <a href={mailto}>
            <img src={ContactButton} className="button" alt="logo" />
          </a>
        </div>

      </div>

      <div className="bottom">

        <div >

        <a href="https://meshi-ran-kiyaku.web.app/">利用規約</a>
          <a href="https://nobuplanning.com">運営会社</a>
          <p>©︎NOBU Planning Inc. 2022
</p>
        </div>

        <img src={Bottom} className="bottom-bg" alt="logo" />

      </div>

    </div>
  );
}

export default App;
