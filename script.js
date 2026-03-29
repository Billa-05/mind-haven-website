:root{
  --bg:#f4f0eb;
  --bg-soft:#efe3db;
  --navbar:#EE5C6C;
  --card:#fffaf7;
  --card-strong:#f3e4dc;
  --text:#4a342f;
  --muted:#7a6258;
  --primary:#d99985;
  --secondary:#796e54;
  --green:#6faa7a;
  --green-soft:#86bf91;
  --line:rgba(90,58,51,0.12);
  --shadow:0 12px 30px rgba(90,58,51,0.12);
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  font-family:"Segoe UI", Arial, sans-serif;
  color:var(--text);
  background:
    radial-gradient(circle at top left, rgba(217,153,133,0.18), transparent 24%),
    radial-gradient(circle at top right, rgba(121,110,84,0.10), transparent 26%),
    linear-gradient(180deg, #f6f2ee 0%, #f1e7df 52%, #f4f0eb 100%);
}

/* container */
.container{
  max-width:1150px;
  margin:0 auto;
  padding:0 24px;
}

/* navbar */
.navbar{
  position:sticky;
  top:0;
  z-index:1000;
  background:rgba(250, 111, 127, 0.96);
  backdrop-filter:blur(10px);
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.nav-inner{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:18px;
  padding:16px 0;
}

.brand{
  display:flex;
  align-items:center;
  gap:14px;
  text-decoration:none;
  min-width:0;
}

.brand-logo{
  width:56px;
  height:56px;
  object-fit:contain;
  display:block;
  flex-shrink:0;
  background:#ffffff;
  padding:2px;
  border-radius:18px;
  box-shadow:0 8px 20px rgba(0,0,0,0.10);
  border:1px solid rgba(255,255,255,0.25);
}

.brand-text{
  display:flex;
  flex-direction:column;
  line-height:1.08;
}

.brand-text span{
  font-size:28px;
  font-weight:800;
  color:#455f1d;
  text-shadow:0 0 8px rgba(53,98,17,0.15);
  letter-spacing:0.5px;
}

.brand-text small{
  color:#fffaf7;
  font-size:11px;
  letter-spacing:0.3px;
}

.navlinks{
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:8px;
  justify-content:flex-end;
}

.navlinks a{
  color:#fffaf7;
  text-decoration:none;
  font-size:14px;
  padding:10px 12px;
  border-radius:12px;
  transition:all 0.25s ease;
}

.navlinks a:hover{
  background:rgba(255,255,255,0.10);
}

.cta{
  background:linear-gradient(90deg, #8ad098, #b8e0a2);
  color:#2f241f !important;
  font-weight:700;
  box-shadow:0 8px 24px rgba(138,208,152,0.18);
}

/* hero */
.hero{
  padding:86px 0 42px;
}

.hero-grid{
  display:grid;
  grid-template-columns:1.22fr 0.78fr;
  gap:28px;
  align-items:center;
}

.hero-kicker{
  display:inline-block;
  padding:10px 16px;
  border-radius:999px;
  background:rgba(255,255,255,0.58);
  border:1px solid rgba(90,58,51,0.10);
  color:var(--secondary);
  font-size:13px;
  box-shadow:0 4px 12px rgba(90,58,51,0.05);
}

.hero h1{
  margin:18px 0 16px;
  font-size:54px;
  line-height:1.08;
  color:var(--text);
}

.hero h1 .soft{
  color:var(--green);
}

.hero p{
  font-size:18px;
  line-height:1.8;
  color:var(--muted);
  max-width:720px;
}

.hero-buttons{
  margin-top:24px;
  display:flex;
  flex-wrap:wrap;
  gap:14px;
}

.btn{
  display:inline-block;
  padding:14px 22px;
  border-radius:16px;
  text-decoration:none;
  font-size:15px;
  font-weight:700;
  transition:all 0.25s ease;
}

.btn-primary{
  background:linear-gradient(90deg, var(--primary), #e7b29f);
  color:#432f29;
  box-shadow:0 10px 26px rgba(217,153,133,0.20);
}

.btn-primary:hover{
  transform:translateY(-2px);
}

.btn-secondary{
  background:#fff8f4;
  border:1px solid rgba(90,58,51,0.10);
  color:var(--text);
}

.btn-secondary:hover{
  background:#f9efe8;
}

.hero-card{
  background:linear-gradient(180deg, #fff7f3, #f5e5dc);
  border:1px solid rgba(90,58,51,0.10);
  border-radius:26px;
  padding:26px;
  box-shadow:var(--shadow);
}

.hero-card h3{
  margin:0 0 12px;
  font-size:22px;
  color:var(--navbar);
}

.hero-card p{
  margin:0;
  font-size:15px;
  color:var(--muted);
  line-height:1.75;
}

.soft-tags{
  margin-top:18px;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}

.soft-tag{
  padding:8px 12px;
  border-radius:999px;
  font-size:12px;
  background:#fffaf7;
  border:1px solid rgba(90,58,51,0.10);
  color:var(--text);
}

/* sections */
.section{
  padding:78px 0;
}

.section-title{
  font-size:36px;
  margin:0 0 12px;
  color:var(--navbar);
}

.section-subtitle{
  color:var(--muted);
  line-height:1.8;
  font-size:17px;
  max-width:860px;
}

/* safety strip */
.safety-grid{
  margin-top:26px;
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  gap:16px;
}

.safety-item{
  background:#fffaf7;
  border:1px solid rgba(90,58,51,0.10);
  border-radius:20px;
  padding:18px;
  box-shadow:0 8px 22px rgba(90,58,51,0.06);
}

.safety-item h4{
  margin:0 0 8px;
  font-size:16px;
  color:var(--secondary);
}

.safety-item p{
  margin:0;
  color:var(--muted);
  line-height:1.65;
  font-size:14px;
}

/* cards */
.grid-3{
  margin-top:26px;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:18px;
}

.card{
  background:linear-gradient(180deg, #fffaf7, #f6e7df);
  border:1px solid rgba(90,58,51,0.10);
  border-radius:24px;
  padding:22px;
  transition:all 0.25s ease;
  box-shadow:0 10px 24px rgba(90,58,51,0.07);
}

.card:hover{
  transform:translateY(-4px);
  box-shadow:0 16px 32px rgba(90,58,51,0.10);
}

.card h3{
  margin:0 0 10px;
  font-size:22px;
  color:var(--navbar);
}

.card p{
  margin:0;
  color:var(--muted);
  line-height:1.75;
  font-size:15px;
}

/* flow */
.flow-grid{
  margin-top:26px;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:18px;
}

.flow-step{
  background:#fffaf7;
  border:1px solid rgba(90,58,51,0.10);
  border-radius:24px;
  padding:22px;
  box-shadow:0 8px 22px rgba(90,58,51,0.06);
}

.flow-step span{
  display:inline-block;
  margin-bottom:12px;
  font-size:13px;
  color:var(--green);
  font-weight:700;
}

.flow-step h3{
  margin:0 0 10px;
  color:var(--navbar);
  font-size:22px;
}

.flow-step p{
  margin:0;
  color:var(--muted);
  line-height:1.75;
}

/* cta block */
.cta-block{
  margin-top:26px;
  text-align:center;
  background:linear-gradient(180deg, #f7e8df, #f1ddd2);
  border:1px solid rgba(90,58,51,0.10);
  border-radius:28px;
  padding:44px 24px;
  box-shadow:var(--shadow);
}

.cta-block h2{
  margin:0 0 14px;
  font-size:34px;
  color:var(--navbar);
}

.cta-block p{
  max-width:760px;
  margin:0 auto;
  color:var(--muted);
  line-height:1.8;
}

/* forms */
.form-card{
  max-width:760px;
  margin-top:26px;
}

.form-input,
.form-textarea,
.form-select{
  width:100%;
  padding:14px;
  border-radius:16px;
  border:1px solid rgba(90,58,51,0.12);
  background:#fffaf7;
  color:#6f5b53;
  margin-bottom:14px;
  outline:none;
  font:inherit;
}

.form-input::placeholder,
.form-textarea::placeholder{
  color:#6f5b53;
  opacity:1;
}

.form-select{
  color:#6f5b53;
  appearance:none;
}

.form-select:invalid{
  color:#6f5b53;
}

.form-textarea{
  min-height:160px;
  resize:vertical;
}

.form-select option{
  color:#111;
}

/* footer */
footer{
  margin-top:30px;
  border-top:1px solid rgba(90,58,51,0.10);
  background:#f0e0d7;
}

.footer-inner{
  padding:24px 0;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  gap:12px;
  color:var(--muted);
  font-size:13px;
}

.footer-inner a{
  color:var(--muted);
  text-decoration:none;
}

.footer-inner a:hover{
  color:var(--navbar);
}

/* responsive */
@media (max-width: 980px){
  .hero-grid,
  .safety-grid,
  .grid-3,
  .flow-grid{
    grid-template-columns:1fr 1fr;
  }

  .hero h1{
    font-size:44px;
  }
}

@media (max-width: 720px){
  .nav-inner{
    flex-direction:column;
    align-items:flex-start;
  }

  .navlinks{
    width:100%;
  }

  .hero-grid,
  .safety-grid,
  .grid-3,
  .flow-grid{
    grid-template-columns:1fr;
  }

  .hero{
    padding-top:64px;
  }

  .hero h1{
    font-size:36px;
  }

  .section-title{
    font-size:30px;
  }

  .brand-text span{
    font-size:21px;
  }

  .brand-logo{
    width:48px;
    height:48px;
    border-radius:18px;
  }
}

.footer-3col{
  display:grid;
  grid-template-columns: 1fr auto 1fr;
  align-items:center;
}

.footer-left{
  text-align:left;
}

.footer-center{
  text-align:center;
  display:flex;
  gap:18px;
  justify-content:center;
}

.footer-right{
  text-align:right;
}

@media (max-width: 720px){
  .footer-3col{
    grid-template-columns:1fr;
    text-align:center;
    gap:10px;
  }

  .footer-left,
  .footer-right{
    text-align:center;
  }

  .footer-center{
    justify-content:center;
  }
}
