import './FileUpload.css';

function FileUpload() {

    // Dosya yükleme alanını handle eden fonksiyon
    const handleFileChange = async (event) => {
        // Hedef input elemanından dosyayı al
        const file = event.target.files[0];
        // Backend'de gönderilecek bir FormData nesnesi oluştur
        const formData = new FormData();
        // Dosyayı FormData nesnesine ekle
        formData.append('file', file);

        // Sunucuya veriyi POST isteği olarak gönder
        const res = await fetch('http://localhost:5000/upload',
            {
                method: 'POST',
                body: formData,
            }
        );

        // Sunucudan gelen yanıtı parsedJson içinde tut
        const parsedJson = await res.json();
        // Aldığın yanıtı konsola yazdır
        console.log(parsedJson);

    }

  return (
    <div>
      <input type="file"  onChange={handleFileChange}/>
    </div>
  )
}

export default FileUpload;