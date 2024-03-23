'use client'

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Grid, GridItem, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";


export default function Home() {
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

      <Container bg='black' mt='10' maxW='6xl'>
        <Box >
          <Image
            src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711093596/companyprofile/k8ukekaz1y3d5esbvkxy.jpg" alt="gambar"
            w='100%'
          />
        </Box>
      </Container>

      <Box h='450px'>
        <Center>
          <Heading mb='5' mt='20'>
            Sajikan Cinta Melalui Hidangan sejak tahun 1998
          </Heading>
        </Center>
        <Center>

          <Box textAlign='justify' w='900px' fontSize='lg'>
            CV. Makan Enak kini telah berkembang dengan sangat pesat.
            Dengan bekal pengalaman menangani catering untuk dosen-dosen asing yang diperbantukan pada Universitas yang ada di Yogyakarta,
            menjadikan CV. Makan Enak sampai dengan saat ini memiliki keunggulan dari segi citarasa.
            Selain itu, Makan Enak juga memiliki layanan terbaik lainnya untuk acara spesialmu,
            seperti hidangan catering untuk corporate hingga private event. Tak hanya itu,
            Makan Enak juga bisa menyesuaikan layanan yang akan disajikan seperti Live Cooking dan Mocktail Bar.
            Makan Enak juga dikenal sebagai usaha catering yang memiliki citarasa blended dan original, yang selalu menyajikan hidangan dengan bahan baku,
            resep dan citarasa asli dari masakan negara asalnya.
          </Box>
        </Center>
      </Box>

      <Box h='1600' bg='grey'>
        <Center>
          <Heading fontSize='3xl' mt='5' color='gray.100'>
            PELAYANAN KAMI
          </Heading>
        </Center>

        <SimpleGrid columns={[2, null, 3]} spacing='40px' mt='20' mr='20' ml='20'>
          <Card maxW='sm'>
            <CardHeader>
              <Heading size='md' textAlign='center'> Kantor </Heading>
            </CardHeader>
            <CardBody>
              <Image
                borderRadius='lg'
                src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711100313/companyprofile/vfvxdh3mbskln1brewgs.webp" alt="gambar">
              </Image>
            </CardBody>
            <CardFooter justify='center'>
              <Button backgroundColor='yellow.500'>Lihat</Button>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardHeader>
              <Heading size='md' textAlign='center'> Pernikahan </Heading>
            </CardHeader>
            <CardBody>
              <Image
                h='200'
                borderRadius='lg'
                src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711102154/companyprofile/ann899mcbnt6trqewjz8.jpg" alt="gambar">
              </Image>
            </CardBody>
            <CardFooter justify='center'>
              <Button backgroundColor='yellow.500'>Lihat</Button>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardHeader>
              <Heading size='md' textAlign='center'> Acara Pribadi </Heading>
            </CardHeader>
            <CardBody>
              <Image
                borderRadius='lg'
                src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711102339/companyprofile/q3nvli97dqnqfggtepxq.jpg" alt="gambar">
              </Image>
            </CardBody>
            <CardFooter justify='center'>
              <Button backgroundColor='yellow.500'>Lihat</Button>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardHeader>
              <Heading size='md' textAlign='center'> Buffet </Heading>
            </CardHeader>
            <CardBody>
              <Image
                borderRadius='lg'
                src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711102404/companyprofile/oe0lra7pzwypxxbmwook.webp" alt="gambar">
              </Image>
            </CardBody>
            <CardFooter justify='center'>
              <Button backgroundColor='yellow.500'>Lihat</Button>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardHeader>
              <Heading size='md' textAlign='center'> Tumpeng </Heading>
            </CardHeader>
            <CardBody>
              <Image
                borderRadius='lg'
                src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711102580/companyprofile/jal25fj8ktuzfmsxydll.jpg" alt="gambar">
              </Image>
            </CardBody>
            <CardFooter justify='center'>
              <Button backgroundColor='yellow.500'>Lihat</Button>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardHeader>
              <Heading size='md' textAlign='center'> Night Buffet Dinner </Heading>
            </CardHeader>
            <CardBody>
              <Image
                borderRadius='lg'
                src="https://res.cloudinary.com/dhioc6nup/image/upload/v1711102791/companyprofile/rzc7fqrotjevfawplmg3.webp" alt="gambar">
              </Image>
            </CardBody>
            <CardFooter justify='center'>
              <Button backgroundColor='yellow.500'>Lihat</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <Center mt='5'>
          <Link href="https://api.whatsapp.com/send/?text=Whatsapp+Admin+Selatan++-+https%3A%2F%2Ftr.ee%2F1FfstTuv67&type=custom_url&app_absent=0">
            <Button variant='solid' bg='yellow.500' mt='10' >
              PESAN SEKARANG
              <ArrowForwardIcon />
            </Button>
          </Link>
        </Center>


        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mt='20' ml='20'>
          <Card>
            <CardHeader>
              <Heading size='md'> Pak Yoga</Heading>
            </CardHeader>
            <CardBody>
              <Text>Pelayanannya sangat ramah. Rasanya pas di lidah.
                Saya suka dengan makanan katering Makan Enak. lebih mantap dari masakan istri saya</Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'> Ibu Rahma</Heading>
            </CardHeader>
            <CardBody>
              <Text>Acara khitanan anak saya berjalan lancar dengan adanya katering Makan Enak. Semua tamu senang sampai bertanya tanya masakannya pesan dimana.</Text>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading size='md'>Pak Razaf</Heading>
            </CardHeader>
            <CardBody>
              <Text>Saya suka kambing gulingnya. Berasa pengen guling beneran</Text>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Heading size='md'>Kak Yogi</Heading>
            </CardHeader>
            <CardBody>
              <Text>Untuk acara privat juga oke. rekommended banget pokoknya. Makannya enak seperti namanya</Text>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Heading size='md'>Kak Dina</Heading>
            </CardHeader>
            <CardBody>
              <Text>Hitungan porsinya selalu dibantu agar tidak kurang. servicenya rapih dan bersih. Senang dengan katering ini. Makasih</Text>
            </CardBody>
          </Card>



            </SimpleGrid>

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