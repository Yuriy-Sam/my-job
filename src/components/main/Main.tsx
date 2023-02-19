import { Box, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Main = (props: Props) => {
  return (
    <Box
      component="main"
      sx={{ margin: "0 auto", p: 3, textAlign: "center", maxWidth: 700 }}
    >
      <Toolbar />
      <Typography variant="h5" color="GrayText">
        Головна
      </Typography>

      <Typography mt={5} variant="h3">
        Юрій Самойленко
      </Typography>

      <Typography mt={3} variant="subtitle1">
        Мені дуже сподобалося розробляти Ваше тестове завдання.
      </Typography>
      <Typography mt={3} variant="subtitle1">
        У мене були проблеми з react router dom в GitHub Pages. Я намагався це
        якось виправити спробував використовувати HashRouter і хук useHistory
        але воно все одно некоректно працювало, тому я скористався хостингом
        vercel.
      </Typography>
      <Typography mt={3} variant="subtitle1">
        Сподіваюся, що я зробив все правильно і що найближчим часом стану
        частиною Вашої команди.
      </Typography>
      <Typography mt={3} variant="subtitle1">
        Код в GitHub:
      </Typography>
      <Link mt={3} href="https://github.com/Yuriy-Sam/my-job">
        https://github.com/Yuriy-Sam/my-job
      </Link>
      <Typography mt={3} variant="h5">
        До зустрічі!
      </Typography>
    </Box>
  );
};

export default Main;
