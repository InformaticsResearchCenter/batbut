import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Artefak() {
    return (
        <Card className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <CardHeader 
            floated={false}
            shadow={false} 
            className="h-80">
            <h1>Fosil</h1>
            </CardHeader>
            <CardBody>
            <div className="w-72">
                <Input label="Kategori BMN" />
            </div>
            </CardBody>
        </Card>
    );
}

export default Artefak;