import { Delete } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { green, purple, yellow } from "@mui/material/colors";


const cate = {
    work: (note) => note.category === 'work',
    reminder: (note) => note.category === 'reminder'
}

const workBG = {
    backgroundColor: yellow[700]
}

const remBG = {
    backgroundColor: purple[500]
}

const bg = {
    backgroundColor: green[500]
}


const NoteCard = ({ note, handleDelete, handleEdit }) => {
    return ( 
        <Card>
            <CardHeader  
                avatar={
                    <Avatar sx={cate.work(note) ? workBG : cate.reminder(note) ? remBG : bg} >{note.category[0].toUpperCase()}</Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note._id)}>
                        <Delete />
                    </IconButton>
                }

                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary' >{note.details}</Typography>
            </CardContent>
        </Card>
     );
}
 
export default NoteCard;