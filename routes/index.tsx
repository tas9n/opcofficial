export default function Home() {
  const Contents = [
    {
      "title": "目的",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (  
        <div>
          <p>
            主に、プログラミングをゆるく楽しむサークルです！
          </p>
          <ul>
            <li>プログラミングはわからないけど、興味がある</li>
            <li>programmingの授業でわからないところがある</li>
          </ul>
          <p>などの初心者や</p>
        </div>
      )
    },
    {
      "title": "活動内容",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
    },
    {
      "title": "活動場所",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
    },
    {
      "title": "活動人数",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
    },
    {
      "title": "相談・入部等",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
    }
  ];

  const SubContents = [
    {
      "title": "サークルについて",
      "list": [
        {
          "title": "1",
          "href": "/"
        },
        {
          "title": "2",
          "href": "/"
        },
        {
          "title": "3",
          "href": "/"
        },
      ]
    },
    {
      "title": "お知らせ・ブログ",
      "list": [
        {
          "title": "1",
          "href": "/"
        },
        {
          "title": "2",
          "href": "/"
        },
        {
          "title": "3",
          "href": "/"
        },
      ]
    },
    {
      "title": "作品",
      "list": [
        {
          "title": "1",
          "href": "/"
        },
        {
          "title": "2",
          "href": "/"
        },
        {
          "title": "3",
          "href": "/"
        },
      ]
    },
    {
      "title": "相談・入部等",
      "list": [
        {
          "title": "1",
          "href": "/"
        },
        {
          "title": "2",
          "href": "/"
        },
        {
          "title": "3",
          "href": "/"
        },
      ]
    }
  ]

  return (
    <main>
      {/* hero */}
      <div className="hero">
        <h1 className="hero__title">OECUPC</h1>
        <p className="hero__description">OECU Programming Circle</p>
      </div>

      {/* Content wrapper */}
      <article className="center-align">
        <section>
          {Contents.map(content=>(
            <section className="media-content">
              <section className="media-content__content">
                <h2>{content.title}</h2>
                {content.content}
              </section>
               <figure className="media-content__image">
                <img src={content.image} alt={content.imageAlt} />
              </figure>
            </section>
          ))}
        </section>

        <section className="sub-content">
          {SubContents.map(content=>(
            <section>
              <h2>{content.title}</h2>
              <ul>
                {content.list.map(element=>(
                  <li><a href={element.href}>{element.title}</a></li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </article>
    </main>
  );
}