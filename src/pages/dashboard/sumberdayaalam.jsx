import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Typography,
    Select, 
    Option,
    Button,
} from "@material-tailwind/react";


export function Sumberdayaalam() {
    return (
        <Card className="mb-12">
            <div className="">
                <CardHeader 
                floated={false}
                shadow={false} 
                className="lg:w-1/3 w-full">
                    <Typography className="" variant="h3">
                        Sumber Daya Alam
                    </Typography>
                </CardHeader>                   
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                                Kategori BMN*
                        </Typography>
                        <Select className="w-full shadow-lg" label="Select Kategori BMN">
                            <Option>6.02.02.99.999</Option>
                            <Option>6.06.01.05.005</Option>
                            <Option>6.06.01.06.001</Option>
                        </Select>  
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            NUP BMN
                        </Typography>
                        <div className="w-full">
                            <Input 
                                label="NUP BMN" 
                            />
                        </div>   
                    </div>
                </CardBody>
                    
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0" 
                            variant="h6"
                        >
                            Tipe BMN
                        </Typography>
                            <Input 
                                label="Tipe BMN" 
                                disabled
                            />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            No Awal
                        </Typography>
                            <Input label="No Awal" />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0" 
                            variant="h6"
                            >
                            Satuan
                        </Typography>
                        <Select className="shadow-lg" label="Select Satuan">
                            <Option>Buah</Option>
                            <Option>Unit</Option>
                            <Option>Set</Option>
                        </Select>   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0" 
                            variant="h6"
                            >
                            Kelompok Koleksi
                        </Typography>
                        <Input 
                            label="Kelompok Koleksi" 
                            disabled
                        />   
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0" 
                            variant="h6"
                            >
                            Jenis Koleksi*
                        </Typography>
                        <Select className="shadow-lg" label="Select Jenis Koleksi">
                            <Option>Buah</Option>
                            <Option>Unit</Option>
                            <Option>Set</Option>
                        </Select>     
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Sub Jenis Koleksi
                        </Typography>
                        <Input 
                            label="Sub Jenis Koleksi" 
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Kode Jenis Koleksi
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Kode Jenis Koleksi" 
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0" 
                            variant="h6"
                            >
                            Ruangan Penyimpanan
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Ruangan Penyimpanan" 
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Lokasi Penyimpanan
                        </Typography>
                        <Input className="grid justify-items-start " label="Lokasi Penyimpanan" />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Kondisi
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Kondisi"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Nama Koleksi
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Nama Koleksi" 
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Keterangan
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Keterangan"
                        />   
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0" 
                            variant="h6"
                            >
                            Umur Geologi
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Umur Geologi" 
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Nama Formasi
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Nama Formasi"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Lokasi Temuan
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Lokasi Temuan"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Lokasi Awal
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Lokasi Awal"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                {/* <div className="flex">
                    <Typography className="flex">
                        Kordinat
                    </Typography>
                        <div className="bg-slate-100 rounded-lg px-5 w-72 pr-4 flex">
                            <div className="flex justify-end ml-9">
                                <div className="">
                                    <div className="">
                                        <Input className="" label="X" />
                                    </div>                                   
                                    <div className="mr-2 ml-4">
                                        <Input className=" " label="Y" />
                                    </div>
                                    <div className="mr-2 ml-4">
                                    <Input className=" "  label="Z" />
                                    </div>     
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography 
                            className="justify-start w-max md:md-inset-0"
                            variant="h6"
                        >
                            Kordinat :
                        </Typography>
                        <div><Input className="" label="X"></Input></div>
                        <div><Input className="" label="Y"></Input></div>
                        <div><Input className="" label="Z"></Input></div>
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Pulau
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Pulau"
                        />   
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Peta
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Peta"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Lembar Peta
                        </Typography>
                        <Select className="w-full shadow-lg" label="Select Lembar Peta">
                            <Option>Peta </Option>
                            <Option>Peta </Option>
                            <Option>Peta </Option>
                        </Select>  
                        </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Skala
                        </Typography>
                        <Select className="w-full shadow-lg" label="Select Skala Peta">
                            <Option>1:50.000</Option>
                            <Option>1:100.000</Option>
                            <Option>1:250.000</Option>
                        </Select>   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Cara Perolehan
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Cara Perolehan"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Tahun Perolehan
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Tahun Perolehan"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Determinator
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Determinator"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Kolektor
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Kolektor"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                        <Typography 
                            className="justify-start w-60 md:md-inset-0" 
                            variant="h6"
                            >
                            Kepemilikan Awal
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Kepemilikan Awal"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                            <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Nilai Perolehan
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Nilai Perolehan" 
                        />   
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                            <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Nilai Buku
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Nilai Buku" 
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                            <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Gambar 1
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Gambar 1" 
                            type="file"
                        />   
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                            <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Gambar 2
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Gambar 2" 
                            type="file"
                        />   
                    </div>
                </CardBody>
        
                <CardBody>
                    <div className="flex justify-start">
                            <Typography 
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                            >
                            Gambar 3
                        </Typography>
                        <Input 
                            className="grid justify-items-start" 
                            label="Gambar 3" 
                            type="file"
                        />   
                    </div>
                </CardBody>
        
            
                <CardBody>
                <div className="flex w-max gap-4">
                    <Button 
                        variant="outlined" color="red">
                        Reset
                    </Button>
                    <Button>
                        SImpan
                    </Button>
                </div>
                </CardBody>
            
        </div> 
    </Card>
    );
}

export default Sumberdayaalam;