import React, { useEffect, useState } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import EditSingleStatu from "./EditSingleStatu";
import { LargeNumberLike } from "crypto";
import axios from "axios";
import { createNoSubstitutionTemplateLiteral } from "typescript";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export interface Statu {
  id: number;
  title: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
}

const EditStatuModal = ({ token, categoryId }: any) => {
  const [statu, setStatu] = useState<any>({
    categoryId, //prop olarak aldığımız kategoriyi ekledik.İstek atarken lazım olacak
  });
  const [statuList, setStatuList] = useState<Statu[]>([]);

  //apiler için config
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //statu listesi api'den alınacak
    axios
      .get(`http://localhost:80/status?categoryId=${categoryId}`, config)
      .then((response) => {
        console.log("statu listesi alındı");
        setStatuList(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []); //statu listimiz değiştikçe çalışsın

  const handleAddStatu = () => {
    //@todo- error handling yap boş textboxlar için
    axios
      .post("http://localhost:80/status", statu, config)
      .then((response) => {
        console.log("statu ekleme başarılı");
        axios
          .get(`http://localhost:80/status?categoryId=${categoryId}`, config)
          .then((response) => {
            setStatuList(response.data);
          });
      })
      .catch((err) => console.log(err.message));
  };

  const handleDeleteStatu = (statuId: any) => {
    //deletion request

    axios
      .delete(`http://localhost:80/status/${statuId}`, config)
      .then((response) => {
        console.log("silme işlemi başarılı");
        axios
          .get(`http://localhost:80/status?categoryId=${categoryId}`, config)
          .then((response) => {
            console.log(response.data);
            setStatuList(response.data);
          });
      })
      .catch((err) => console.log(err.message));
  };

  const handleFieldChange = (event: any) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setStatu((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Statu Duzenle Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <TextField
            id="textfield-title"
            onChange={handleFieldChange}
            name="title"
            label="Status"
            variant="standard"
          />
          <TextField
            id="textfield-color"
            onChange={handleFieldChange}
            name="color"
            label="Color"
            variant="standard"
          />
          <Button onClick={handleAddStatu} variant="contained">
            Add Statu
          </Button>

          <p id="child-modal-description">
            Burada ilgili kategoriye ait statüler listelenecek
          </p>

          <ul>
            {/* Map ile birlikte statüleri listeleyelim */}
            {statuList.map((statu) => (
              <li key={statu.id}>
                {statu.title}
                <Button onClick={() => handleDeleteStatu(statu.id)}>
                  Delete
                </Button>
                <EditSingleStatu
                  token={token}
                  setStatuList={setStatuList}
                  statusList={setStatuList}
                  statuId={statu.id}
                />
              </li>
            ))}
          </ul>

          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
export default EditStatuModal;
