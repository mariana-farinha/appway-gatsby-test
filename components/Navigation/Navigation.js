import Link from "next/link";

const Navigation = () => (
  <div className="w-100 border-bottom border-light">
    <div className="container">
      <div className="row">
        <div className="col-12 p-3">
          <Link href="/">
            <a>
              <img
                src="/static/images/appway-logo.png"
                className="mw-100"
                style={{ width: "6.5rem" }}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
