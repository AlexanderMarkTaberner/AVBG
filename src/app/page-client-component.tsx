'use client';
import Dialog from '@mui/material/Dialog';
import React from "react";
import Image from 'next/image';
import { ImageListItem, Grid, DialogContent, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
interface GalleryProps {
  images: { src: string }[];
}

export default function PageClientComponent({ images }: GalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState("");

  const handleClickOpen = (image: HTMLImageElement) => {
    setCurrentImage(image.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Toolbar>
        <Grid container spacing={1} width={"100%"}>
          <Grid size="grow">
            <Typography>{process.env.NEXT_PUBLIC_GALLERY_NAME}&apos;s Gallery</ Typography>
          </Grid>
        </Grid>
      </Toolbar>

      <div className="flex min-h-screen flex-col items-center justify-between p-14">
        <Grid container columns={100} spacing={2}>
          {images.map((item, index) => (
            <Grid size={{ xs: 100, md: 33, lg: 25, xl: 20 }} key={index} justifyContent="center" alignItems="center" margin="auto" display="block" className="zoom">
              <ImageListItem>
                <Image
                  style={{ display: "block", margin: "auto", height: "auto", width: "100%" }}
                  width={500}
                  height={500}
                  className="image-box"
                  src={item.src}
                  alt={'image'}
                  quality={75}
                  onClick={(e) => handleClickOpen(e.currentTarget)} />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        //onClick={handleClose}
        sx={{
          zIndex: 15000,
          background: 'transparent',
          '& .MuiPaper-root': {
            background: '#0000009d'
          }
        }}>
        <div style={{ height: "95%", width: "95%", margin: "auto", alignContent: "centre" }}>
          <IconButton
            aria-label="close"
            size="large"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: "gray",
              background: '#ffffff15',
              zIndex: 15000
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent className='click-zoom' style={{ width: "100%", height: "100%", margin: "auto", padding: "auto", display: "flex" }}>
            <Image
              src={currentImage}
              alt={'image'}
              width={2000}
              height={2000}
              quality={100}
              style={{ height: "auto", width: "auto", margin: "auto", maxWidth: "100%", maxHeight: "100%" }} />
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
