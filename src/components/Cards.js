import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'

const Cards = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
     <div>
        <Card sx={{maxWidth:"300px"}}>
              <CardMedia
              component={'img'}
              height="140px"
              image='image.jpg'
              alt='test image'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                        web design
                </Typography>
                <Typography variant="body2">
                      Lorem 10jhjkefgggggggggggggggggggggggggggggggggg
                </Typography>

              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary' onClick={()=>setOpen(true)}>Delete</Button>
              </CardActions>
        </Card>

        <Dialog open={open} onClose={()=>setOpen(false)}>
             <DialogTitle>Are You Sure</DialogTitle>  
             <DialogContent>
                <DialogContentText>
                    are you sure to delete this product
                </DialogContentText>
             </DialogContent>
             <DialogActions>
                <Button>Cancel</Button>
                <Button>save</Button>
             </DialogActions>
        </Dialog>
     </div>
    </>
  )
}

export default Cards