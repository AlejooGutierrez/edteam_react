import React from 'react'

const Curso = () => (
    <div className="ed-grid m-grid-3">
<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://edteam-media.s3.amazonaws.com/courses/big/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg" alt="javaScript"/>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      JavaScipt desde cero (2020)
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/e19b1e7f-6dcc-495b-883c-7d0b9b3fdf15.jpg" alt="Beto Quiroga" />
          </div>
        </div>
        <span className="small">Beto Quiroga </span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="/">$ 20USD</a>
    </div>
  </div>
</article>
</div>
)
export default Curso