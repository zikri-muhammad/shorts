// Mencari Ponsel
function soalSatu() {
	const query = `
        SELECT Merek, COUNT(Model) AS Jumlah_Model
        FROM Ponsel
        WHERE DualSim = 'Ya'
        GROUP BY Merek;
    `;
}

// Mencari pahlawan super
function soalDua() {
	const query = `
        SELECT DISTINCT ps.TempatTinggal
        FROM PahlawanSuper ps
        JOIN Senjata s ON ps.ID = s.PahlawanSuperID
        JOIN JenisSenjata js ON s.JenisSenjataID = js.ID
        WHERE js.JenisSenjata = 'Kapak';
    `;
}

// Mencari cinta yang hilang
function soalTiga() {
    const query = `
        SELECT p.ID, p.Nama, p.TempatTinggal, p.TanggalLahir
        FROM Penduduk p
        JOIN (
            SELECT DISTINCT TOP 100 pp.PasanganID, MAX(pp.TanggalPisah) AS TanggalPisah
            FROM Perpisahan pp
            GROUP BY pp.PasanganID
            ORDER BY MAX(pp.TanggalPisah) DESC
        ) latest_perpisahan ON p.ID = latest_perpisahan.PasanganID
        ORDER BY latest_perpisahan.TanggalPisah DESC;
    `;
}
