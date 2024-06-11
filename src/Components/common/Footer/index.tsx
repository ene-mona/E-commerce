import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = ()=> {
  return (<Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              E-commerce
            </Typography>
            <Typography variant="h4" color="text.primary">
              Cricklewood, London NW2 6qg,UK
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.dribble.com/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="currentColor" d="M675.1 328.3a245.2 245.2 0 0 0-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144c87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6c41.7 32.5 94.1 51.9 151 51.9c34.1 0 66.6-6.9 96.1-19.5c-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6zm47.7-11.9c32.2 88.4 45.3 160.4 47.8 175.4c55.2-37.3 94.5-96.4 105.4-164.9c-8.4-2.6-76.1-22.8-153.2-10.5zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 736c-158.8 0-288-129.2-288-288s129.2-288 288-288s288 129.2 288 288s-129.2 288-288 288zm53.1-346.2c5.7 11.7 11.2 23.6 16.3 35.6c1.8 4.2 3.6 8.4 5.3 12.7c81.8-10.3 163.2 6.2 171.3 7.9c-.5-58.1-21.3-111.4-55.5-153.3c-5.3 7.1-46.5 60-137.4 97.1zM498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3c-68.8 32.5-120.3 95.9-136.2 172.2c11 .2 112.4.7 227.4-29.9zm30.6 82.5c3.2-1 6.4-2 9.7-2.9c-6.2-14-12.9-28-19.9-41.7c-122.8 36.8-242.1 35.2-252.8 35c-.1 2.5-.1 5-.1 7.5c0 63.2 23.9 120.9 63.2 164.5c5.5-9.6 73-121.4 199.9-162.4z"/></svg>
            </Link>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Shop
            </Typography>
            <Typography variant="h4" color="text.primary">
              Gift cards
            </Typography>
            <Typography variant="h4" color="text.primary">
              Site map
            </Typography>
            <Typography variant="h4" color="text.primary">
              Polka blog
            </Typography>
            <Typography variant="h4" color="text.primary">
              Login
            </Typography>
            <Typography variant="h4" color="text.primary">
              Sign In
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sell
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Sell on Polka
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Teams
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Forums
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Affiliates
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Polka,Inc.
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Policies
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Investors
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Careers
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Press
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Help
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Help Center
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Trust and safety
            </Typography>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Privacy settings
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              @ 2022 Commerce, Inc.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Privacy Policy
            </Typography>
            
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Terms of use
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Cookies
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Scroll to top
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer