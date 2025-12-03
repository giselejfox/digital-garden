export default function Home() {
  return (
    <div className="container py-5 mt-3">
      <main>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 ">
            <h1>🌱 Welcome to Gisele&apos;s Garden</h1>
            <p>This is a site that&apos;s a bit less profesh and a bit more where I can ramble and share myself online in a more creative way.</p>
            <p>I&apos;m still in the beginning phases of tending to my garden so come along for the ride.</p>
            <p>Welcome in!</p>

            {/* COLLECTIONS */}
            <h2 className="about-h2">collections</h2>
            <div className="horizontal-line mb-3"></div>
            <ul>
              {/* <li><a href='/cd-shelf'>🚧 cd shelf</a> - where I show you all the CDs I've listened to in totality</li>
              <li><a href='/cd-shelf'>🚧 book shelf</a> - where I talk about my favorite books</li>
              <li><a href='/cd-shelf'>🚧 my favorite clothes</a> - where I brag about my cool clothing</li> */}
              <li><a href='/digital-garden/favorite-websites'>my favorite websites</a> - where I entice you to click on links</li>
              <li><a href='/digital-garden/observation-journal'>observation journal</a> - where I show you the world through my iPhone lens</li>
            </ul>

            {/* CREATIONS */}
            {/* <h2 className="about-h2">creations</h2>
            <div className="horizontal-line mb-3"></div>
            <ul>
              <li><a href='/cd-shelf'>🚧 film photo gallery</a></li>
              <li><a href='/cd-shelf'>🚧 fiber arts gallery</a></li>
              <li><a href='/cd-shelf'>🚧 coding experiments</a></li>
            </ul> */}

            {/* WRITINGS */}
            {/* <h2 className="about-h2">writings</h2>
            <div className="horizontal-line mb-3"></div>
            <ul>
              <li><a href='/cd-shelf'>🚧 series of blog posts from my study abroad in Amsterdam</a></li>
              <li><a href='/cd-shelf'>🚧 maybe a blog lives here...</a></li>
            </ul> */}

            {/* WRITINGS */}
            <h2 className="about-h2">how this site is run</h2>
            <div className="horizontal-line mb-3"></div>
            <p>I use are.na as a CMS for most of the pages here. It has a great, simple, API and UX so I can easily upload from my phone or computer. It doesn&apos;t hurt that most of my lists here are simple.</p>
            <p>Why not just use are.na as the digital garden point blank? Because sometimes I&apos;m going to want to get crafty. Once you have full creative control of a webpage it&apos;s hard to go back.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
