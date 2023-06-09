"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export default function AddPromptButton() {
    const router = useRouter()

    return (
        <Button size='sm' onClick={() => router.push('prompts/create')}>
            <Plus className="mr-1 h-4 w-4" />
            Create Template
        </Button>
    )
}
