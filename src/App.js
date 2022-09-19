import React, { useState } from 'react'
import TopImg from "./img/top.png";
import AppleIcon from "./img/dl_icon_apple.png";
import GoogleIcon from "./img/dl_icon_google.png";
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
import ContactButton from "./img/title6_contact_contents2.png";
import Bottom from "./img/bottom.png";
import mov1 from "./img/movie/a.mp4";
import mov2 from "./img/movie/b.mp4";
import mov3 from "./img/movie/c.mp4";
import mov4 from "./img/movie/d.mp4";
import ajian from "./img/dish-icon/icon_ajian.png";
import cafe from "./img/dish-icon/icon_cafe.png";
import fastfood from "./img/dish-icon/icon_fastfood.png";
import gohan from "./img/dish-icon/icon_gohan.png";
import men from "./img/dish-icon/icon_men.png";
import niku from "./img/dish-icon/icon_niku.png";
import nomiya from "./img/dish-icon/icon_nomiya.png";
import sakana from "./img/dish-icon/icon_sakana.png";
import washoku from "./img/dish-icon/icon_washoku.png";
import youshoku from "./img/dish-icon/icon_youshoku.png";

import './App.scss';

function App() {
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
          <h1><span>Popdish(ポップディッシュ)とは？</span></h1>
          <p>Popdishとは、動画と地図でグルメ情報を投稿検索でき、</p>
          <p>気になるお店情報の保存や、好みが近いユーザーのフォローもできる、</p>
          <p>新感覚のグルメ動画SNS。</p>
          <br />
          <p>「今食べたい」が、すぐに見つかる。</p>
      </div>

      {/*  Popdish で何ができるの */}
        <div className="why-popdish">
          <h2><span>Popdish で何ができるの?</span></h2>
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
              <video autoPlay muted playsInline loop width="20%">
                <source src={mov1} type="video/mp4" />
              </video>
            </div>

            <div className="mov-col">
            <img src={tag2} className="" alt="logo" />
              <video autoPlay muted playsInline loop width="20%">
                <source src={mov2} type="video/mp4" />
              </video>
            </div>

            <div className="mov-col">
            <img src={tag3} className="" alt="logo" />
              <video autoPlay muted playsInline loop width="20%">
                <source src={mov3} type="video/mp4" />
              </video>
            </div>

            <div className="mov-col">
                <img src={tag4} className="" alt="logo" />
              <video loop autoPlay muted playsInline width="20%">
                <source src={mov4} type="video/mp4" />
              </video>
            </div>

          </div>
        </div>

        {/*  Popdish で探せる料理ジャンル一覧 */}
        <div className="genre">
          <h2><span>Popdish で探せる料理ジャンル一覧</span></h2>
          <img src={Contents3} className="contents" alt="logo" />
          {/* <div className="contents">
            <div className="row">
              <div className="genre-div">
                <img src={niku} className="title" alt="logo" />
                <p>
                  肉料理
                </p>
              </div>
            </div>
          </div> */}
        </div>

      {/*  Popdish で何ができるの */}
        <div className="can">
          <h2><span>Popdishはこんな人にオススメ！</span></h2>
          <img src={Contents4} className="contents" alt="logo" />
        </div>

      {/*  NEWS */}
        <div className="news">
                    <h2><span>NEWS</span></h2>
          <ul>
            <li>
              2022年7月　日本スタートアップ支援２号投資事業有限責任組合から、J-KISS型新株予約権による資金調達を実施しました。
            </li>
            <li>2022年7月　Androidアプリのベータ版をリリースしました。</li>
            <li>2022年6月　iPhoneアプリのベータ版をリリースしました。</li>
            <li>2022年3月　JSSA（日本スタートアップ支援協会）主催のピッチコンテストで、オーディエンス賞、スポンサー賞（第一法律事務所賞）をダブル受賞しました。</li>
            <li>2021年11月　G'sAcademy主催のピッチコンテストGLOBAL GEEK AUDITIONにて優勝しました。</li>
            <li>2021年9月　経済産業省・JETRO（独立行政法人日本貿易振興機構）主催、グローバル企業家等育成プログラム「始動Next Innovator 2021」に採択されました。</li>
          </ul>
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
          <h2><span>CONTACT</span></h2>
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
        <img src={Bottom} className="bottom-bg" alt="logo" />
        <div>
          <a href="https://meshi-ran-kiyaku.web.app/">利用規約</a>
          <a href="https://nobuplanning.com">運営会社</a>
          <p>©︎NOBU Planning Inc. 2022</p>
        </div>
      </div>

    </div>
  );
}

export default App;
