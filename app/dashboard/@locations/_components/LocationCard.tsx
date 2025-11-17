import { API_URL } from "@/constants";
import { Location, Manager } from "@/entitites";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import axios from "axios";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    const header = await authHeaders();
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            ...header
        }
    });
    return (
        <Card>
            <CardHeader>
                <p className="w-full"> Tienda: <b>{data.locationName}</b> </p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full"> Manager: <Link href={`/dashboard/managers`}><b>{data.manager?.managerFullName}</b></Link> </p>
            </CardBody>
        </Card>
    );
}