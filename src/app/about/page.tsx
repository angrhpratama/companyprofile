'use client'

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Grid, GridItem, Heading, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";


export default function About() {
  return (
    <div>
      <Box
        alignContent='center'
        p='5' bg='black'
      >
        <Center gap='20'>
          <Link href="/about" color='white'>
            Tentang Kami
          </Link>
          <Link href="/menu" color='white'>
            Menu
          </Link>
          <Link href="/">
            <Image
              borderRadius='10px'
              boxSize="50px"
              src='https://res.cloudinary.com/dhioc6nup/image/upload/v1710914116/companyprofile/logo.png' alt="gambar logo" />
          </Link>
          <Link href="/team" color='white'>
            Tim Kami
          </Link>
          <Link href="/contact" color='white'>
            Kontak
          </Link>
        </Center>
      </Box>

      <Container mt='10' maxW='2xl'>
        <Box >
          <Image
            src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711123900/companyprofile/scarvu0yrlgxmio775pj.jpg" alt="gambar"
            w='100%'
          />
        </Box>
      </Container>

      <Box h='600px'>
        <Center>
          <Heading mb='5' mt='20'>
            TENTANG KAMI
          </Heading>
        </Center>


        <Container maxW='5xl'>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://res.cloudinary.com/dhioc6nup/image/upload/v1711122971/companyprofile/oxzijmfi5u76bo4bsp37.jpg'
              alt='gambar'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>PENDIRI</Heading>

                <Text py='2'>
                  Berawal dari hobi memasak, ibu Tina memilih untuk meneruskannya menjadi usaha katering. Sejak pertama mendirikan pada tahun 1998
                  CV. Makan Enak berhasil menjadi pelayanan makanan yang dipercaya oleh universitas, pernikahan maupun acara keluarga.
                  Dengan tetap mempertahankan kualitas pelayanan yang ramah serta selalu menguatamakan bahan masakan rempah pilihan membuat cita rasa
                  CV. Makan Enak tetap dinanti oleh semua orang. merangkul orang-orang yang sevisi dengan ibu Tina dalam penyajian masakan yang terbaik
                  turut menjadi salah satu usaha katering ini bisa bertahan hingga kini.
                </Text>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Stack>
          </Card>
        </Container>
        <Center>
          <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">
          <Button  variant='solid' bg='yellow.500' mt='10'>
            PESAN SEKARANG
          </Button>
          </Link>
        </Center>
      </Box>





      <Box pl='2' bg='black' h='400px' color='white'>
        <Grid templateColumns='repeat(6, 1fr)' gap={2}>
          <GridItem colSpan={2} h='10' bg='black' mt='10' ml='10'>
            <Heading>
              <Text as='samp'>
                Hubungi Kami
              </Text>
            </Heading>
            <Text>
              0211-3546-3333
            </Text>
            Jl. Seturan Raya No.6, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            <Image
              mt='5'
              boxSize='5'
              src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711107721/companyprofile/obsmbdfcdyiabjz87u38.png" alt="ig"

            ></Image>
          </GridItem>
          <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' mt='10' >
            <Image
              justifyContent='center'
              src='https://res.cloudinary.com/dhioc6nup/image/upload/v1711107326/companyprofile/v4zx1qac6bdohasyqj0s.png' alt="map"
            >
            </Image>
          </GridItem>
        </Grid>
      </Box>

    </div >
  );
}
