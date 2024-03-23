'use client'

import { useDisclosure, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Grid, GridItem, Heading, Image, Link, ScaleFade, SimpleGrid, Slide, Text } from "@chakra-ui/react";


export default function Menu() {
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

      <Container maxW='7xl'>
        <Box h='900' bg='white'>
          <Center>
            <Heading fontSize='3xl' mt='5' color='black'>
              MENU
            </Heading>
          </Center>

          <SimpleGrid columns={[2, null, 3]} spacing='40px' mt='10' mr='20' ml='20'>
            <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">

              <Card maxW='sm'>
                <CardHeader>
                  <Heading size='md' textAlign='center'> Kambing Guling </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    borderRadius='lg'
                    src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711124466/companyprofile/hpmf7anp4ve8uvpswsvs.jpg" alt="kambing guling">
                  </Image>
                </CardBody>
                <CardFooter justify='center'>
                </CardFooter>
              </Card>
            </Link>

            <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">
              <Card maxW='sm' h='310'>
                <CardHeader>
                  <Heading size='md' textAlign='center'> Aneka Soup </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    h='200'
                    borderRadius='lg'
                    src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711171151/companyprofile/d9z6ae7bevlmyqtxwa7p.webp" alt="gambar">
                  </Image>
                </CardBody>
                <CardFooter justify='center'>
                </CardFooter>
              </Card>
            </Link>

            <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">

              <Card maxW='sm'>
                <CardHeader>
                  <Heading size='md' textAlign='center'> Aneka Sayuran </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    borderRadius='lg'
                    src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711171273/companyprofile/ie9hezqoik4a2kwv2wg0.png" alt="gambar">
                  </Image>
                </CardBody>
                <CardFooter justify='center'>
                </CardFooter>
              </Card>
            </Link>

            <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">

              <Card maxW='sm' h='340'>
                <CardHeader>
                  <Heading size='md' textAlign='center'> Aneka Salad </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    borderRadius='lg'
                    src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711171518/companyprofile/g2s0e6xkjxagenbhalte.jpg" alt="gambar">
                  </Image>
                </CardBody>
                <CardFooter justify='center'>
                </CardFooter>
              </Card>
            </Link>

            <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">

              <Card maxW='sm'>
                <CardHeader>
                  <Heading size='md' textAlign='center'> Ikan </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    borderRadius='lg'
                    src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711171792/companyprofile/ovrhgd0yzgohwne3hamw.jpg" alt="gambar">
                  </Image>
                </CardBody>
                <CardFooter justify='center'>
                </CardFooter>
              </Card>
            </Link>

            <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">

              <Card maxW='sm'>
                <CardHeader>
                  <Heading size='md' textAlign='center'> Makanan Pedas </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    borderRadius='lg'
                    src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711171641/companyprofile/phtl9dcqlbrjts9hwlcl.jpg" alt="gambar">
                  </Image>
                </CardBody>
                <CardFooter justify='center'>
                </CardFooter>
              </Card>
            </Link>
          </SimpleGrid>
          <Center>
            <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">
              <Button variant='solid' bg='yellow.500' mt='10'>
                PESAN SEKARANG
              </Button>
            </Link>
          </Center>
        </Box>
      </Container>

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
