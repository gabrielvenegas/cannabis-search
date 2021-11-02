import {
  Autocomplete,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import cannabisData from "./data.json";

const Home: NextPage = () => {
  const [chosenStrain, setChosenStrain] = React.useState<any>();
  return (
    <div className={styles.container}>
      <Head>
        <title>Cannabis search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <Grid container width="100%" spacing={5}>
          <Grid item xs={12}>
            <h1 className={styles.title}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cannabisData}
                getOptionLabel={(option) => option.Strain as string}
                noOptionsText="Nenhuma strain encontrada"
                onChange={(event, value) => setChosenStrain(value)}
                renderInput={(params) => (
                  <TextField {...params} label="Pesquise pelo nome da strain" />
                )}
              />
            </h1>
          </Grid>
          {chosenStrain && (
            <>
              <Grid item xs={12} sm={12} md={2}>
                <Card sx={{ maxHeight: 300 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Sabor
                    </Typography>
                    {chosenStrain &&
                      chosenStrain.Flavor.split(",").map(
                        (f: string, k: number) => (
                          <Typography key={k} variant="body2">
                            {f}
                          </Typography>
                        )
                      )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Card sx={{ maxHeight: 300 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Efeitos
                    </Typography>
                    {chosenStrain &&
                      chosenStrain.Effects.split(",").map(
                        (f: string, k: number) => (
                          <Typography key={k} variant="body2">
                            {f}
                          </Typography>
                        )
                      )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Descrição
                    </Typography>
                    {chosenStrain && (
                      <Typography variant="body2">
                        {chosenStrain.Description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
