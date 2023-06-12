import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

type Props = {
    prompt: string
    input_variables: string[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const PromptContainer: React.FC<Props> = ({ prompt, input_variables, onChange }) => {

    const isReadOnly = onChange == undefined

    return (
        <div className="mb-4 rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <Textarea
                name="prompt"
                id="prompt"
                className={`font-medium ${isReadOnly ? '' : 'min-h-[calc(40vh)]'}`}
                placeholder="Write a prompt..."
                value={prompt}
                onChange={onChange}
                readOnly={isReadOnly}
            />
            <Separator />
            <div className="px-3 py-2">
                {input_variables.length ? (
                    <>
                        <label className="text-sm font-medium leading-none">
                            Input Variables
                        </label>
                        <div className="mt-2 mb-1 flex flex-wrap gap-2">
                            {input_variables.map(
                                (variable, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="px-2 py-0 rounded-xl border-ring border-2 text-md font-medium text-accent-foreground/75 whitespace-nowrap"
                                    >
                                        {variable}
                                    </Badge>
                                )
                            )}
                        </div>
                    </>
                ) : (
                    <label className="text-muted-foreground text-md">
                        {isReadOnly ? "No Input Variables" : "Define input variables using {braces}"}
                    </label>
                )}
            </div>
        </div>
    )
}

export default PromptContainer
