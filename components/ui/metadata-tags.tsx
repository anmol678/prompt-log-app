import MetadataBadge from "./metadata-badge";
import Tag from "./tag";
import { Project } from "@/types/project";

type MetadataTagsProps = {
    project: Project | null
    tags: string[]
}

export default function MetadataTags({ project, tags }: MetadataTagsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {project && 
                <MetadataBadge 
                    title='project' 
                    content={project.title} 
                    mono={false} 
                />
            }
            {tags.map((tag, index) => (
                <Tag key={index} content={tag} />
            ))}
        </div>
    )
}
