import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockClockIcon from '@mui/icons-material/LockClock';

export const Sidebar = () => {
  return (
    <Box className="w-[20%] h-screen bg-[#d8f3ff] text-slate-300 flex flex-col border-slate-800 shadow-2xl p-[10px]">
        <Typography variant="h5" className="font-black tracking-tight text-white flex items-center">
          QA ПРАКТИКА
        </Typography>
      <div>
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.05)', paddingTop: "5px" }} />
      </div>

      <List className="flex-1">
        <ListItem disablePadding className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl shadow-lg shadow-blue-900/20">
          <ListItemButton sx={{ borderRadius: '16px', py: 1.5 }}>
            <ListItemIcon className="min-w-[45px]">
              <PhoneIphoneIcon sx={{ color: 'primary' }} />
            </ListItemIcon>
            <ListItemText 
              primary={<Typography className="font-bold text-[1.25rem]">Завдання 1</Typography>}
              secondary="Форма телефону" 
              secondaryTypographyProps={{ style: {fontSize: '1rem' } }}
            />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding className="opacity-40 grayscale">
          <ListItemButton disabled sx={{ borderRadius: '16px', py: 1.5 }}>
            <ListItemIcon className="min-w-[45px]">
              <LockClockIcon sx={{ color: '#5a6474ff' }} />
            </ListItemIcon>
            <ListItemText 
              primary={<Typography className="font-medium text-[1rem]">Завдання 2</Typography>}
              secondary="Буде доступно пізніше" 
              secondaryTypographyProps={{ style: { fontSize: '0.75rem', color: '#485566ff' } }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};