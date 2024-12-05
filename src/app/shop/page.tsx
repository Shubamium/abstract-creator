import React from "react";
import "./shop.scss";
import { fetchData, urlFor } from "@/db/sanity";
type Props = {};

export default async function ShopPage({}: Props) {
  const shop = await fetchData<any[]>(`
		*[_type == 'product']{
		...}
	`);

  return (
    <main id="page_shop">
      <div className="ear-panel">
        <img src="/de/ear_r.png" alt="" className={"ear l"} />
        <img src="/de/ear_r.png" alt="" className={"ear r"} />
        <section id="shop-heading">
          {/* <div className="ear-panel"> */}

          <article>
            <h2>SHOP</h2>
            <p>
              (SHOP Description) ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </article>
          {/* </div> */}
          <figure>
            <img src="/bg/pfp1.png" alt="" />
          </figure>
        </section>
      </div>

      <section id="product-list">
        {shop &&
          shop.map((prod: any) => {
            return (
              <div className="btn product" key={prod._id}>
                <div className="prod-img">
                  <img src={prod.image && urlFor(prod.image).url()} alt="" />
                </div>
                <div className="prod-info">
                  <div className="info">
                    <h2>{prod.name}</h2>
                    <p>{prod.description}</p>
                  </div>
                  <div className="detail">
                    <h2>${prod.price}</h2>
                    <a href={prod.product_link} target="_blank" className="btn">
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        {/* <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>

        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="prod-img">
            <img src="/awd" alt="" />
          </div>
          <div className="prod-info">
            <div className="info">
              <h2>ITEM NAME</h2>
              <p>short item description here write the description</p>
            </div>
            <div className="detail">
              <h2>$25</h2>
              <button className="btn">BUY</button>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
