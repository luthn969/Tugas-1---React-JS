import React from "react";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            NF Academy
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* HOME */}
        <section id="home" className="my-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero">
                <h1 className="display-6 fw-bold">Belajar Keterampilan Digital Bersama NF Academy</h1>
                <p className="lead">Kursus praktis, mentor berpengalaman, dan materi yang selalu diperbarui — dirancang untuk membantu Anda siap kerja di industri digital.</p>
                <ul>
                  <li>Akses materi interaktif dan tugas praktik</li>
                  <li>Evaluasi otomatis & sertifikat</li>
                  <li>Forum diskusi & bimbingan mentor</li>
                </ul>
                <a href="#team" className="btn btn-primary mt-3">
                  Kenali Tim Kami
                </a>
                <a href="#contact" className="btn btn-outline-primary mt-3 ms-2">
                  Hubungi Support
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop" alt="Belajar online" className="img-fluid rounded-3 shadow-sm" />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="my-5">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="fw-semibold">Kurikulum Terupdate</h5>
                <p className="mb-0">Materi disusun sesuai kebutuhan industri dan praktik terbaik.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="fw-semibold">Mentor Profesional</h5>
                <p className="mb-0">Mentor aktif di industri yang siap membimbing Anda step-by-step.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="fw-semibold">Komunitas Supportive</h5>
                <p className="mb-0">Bergabung dalam komunitas belajar untuk saling membantu dan kolaborasi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="my-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4">Tim NF Academy</h2>
            <small className="text-muted">Profesional di balik kursus dan support</small>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card team-card h-100 text-center p-3">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" className="rounded-circle mx-auto d-block mt-3" alt="Andi Pratama" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title mb-1">Andi Pratama</h5>
                  <p className="text-muted small">Head of Curriculum</p>
                  <p className="card-text">Bertanggung jawab atas perancangan kurikulum dan pengembangan materi pembelajaran yang relevan dengan industri.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card team-card h-100 text-center p-3">
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" className="rounded-circle mx-auto d-block mt-3" alt="Siti Aminah" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title mb-1">Siti Aminah</h5>
                  <p className="text-muted small">Lead Mentor — Frontend</p>
                  <p className="card-text">Mentor di bidang pengembangan web dan UI/UX. Sering mengadakan live coding dan review proyek.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card team-card h-100 text-center p-3">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" className="rounded-circle mx-auto d-block mt-3" alt="Budi Santoso" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title mb-1">Budi Santoso</h5>
                  <p className="text-muted small">Support & Operations</p>
                  <p className="card-text">Menangani helpdesk, pendaftaran peserta, dan operasional platform sehingga pengalaman belajar tetap lancar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="my-5">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="contact-card">
                <h3 className="h5">Hubungi Kami</h3>
                <p className="text-muted">Butuh bantuan pendaftaran, akses materi, atau laporan teknis? Isi form di samping atau hubungi kami langsung.</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <strong>WhatsApp:</strong> <a href="https://wa.me/6282213912625">+62 822-1391-2625</a>
                  </li>
                  <li>
                    <strong>Email:</strong> <a href="mailto:support@nfacademy.id">support@nfacademy.id</a>
                  </li>
                  <li>
                    <strong>Alamat:</strong> Jl. Contoh No.1, Jakarta
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-card">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" placeholder="Nama lengkap" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="nama@domain.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea className="form-control" rows="5" placeholder="Tulis pesan Anda di sini..."></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container text-center">
          <small className="text-muted">© NF Academy — Semua hak dilindungi. Dibuat dengan ❤️</small>
        </div>
      </footer>
    </>
  );
}

export default App;
