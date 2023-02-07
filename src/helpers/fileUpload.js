export const fileUpload = async (file) => {
  if (!file) throw new Error("No Tenemos Ningun Archivo a Subir");
  const cloudURL = `https://api.cloudinary.com/v1_1/danteharold/upload`;

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData,
    });
    if (!resp.ok) throw new Error("No se pudo subir Imagen");
    const cloudRes = await resp.json();
    return cloudRes.secure_url;
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};
