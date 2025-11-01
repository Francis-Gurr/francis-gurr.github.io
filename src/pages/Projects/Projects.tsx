import { useEffect, useState } from 'react';
import * as MastersProject from '@/pages/Projects/projects/masters-project/masters-project.mdx'
import { ProjectCard } from '@/pages/Projects/ProjectCard';
import { Dialog, DialogTitle, DialogContent, DialogHeader, DialogDescription, DialogFooter } from '@/components/ui/dialog'

type Project = {
    title: string,
    date: string,
    abstract: string,
    thumbnail?: string,
    slug: string
}

const Projects: React.FC = () => {
    // const [projects, setProjects] = useState<Project[]>([])

    // useEffect(() => {
    // async function loadPosts() {
    //     const markdownFiles = import.meta.glob("/src/pages/Projects/projects/**/*.mdx");
    //     console.log(markdownFiles)
    //     const projectEntries = await Promise.all(
    //         Object.entries(markdownFiles).map(async ([path, resolver]) => {
    //             const file = await resolver();
    //             const { data } = matter(file.default);
    //             return {
    //                 title: data.title,
    //                 date: data.date,
    //                 abstract: data.abstract,
    //                 image: path.replace("index.md", data.image || ""),
    //                 slug: path.replace("/src/pages/Posts/posts/", "").replace("/index.md", ""),
    //             };
    //         })
    //     );
    //     setPosts(projectEntries);
    // }

    //     loadPosts();
    // }, [])
    // console.log(MastersProject)
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [openProject, setOpenProject] = useState({ default: () => '' });

    const openDialog = (project) => {
        setIsDialogOpen(true)
        console.log(project)
        setOpenProject(project)
    }

    return (
        <>
            <ProjectCard
                title={MastersProject.title}
                type={MastersProject.type}
                description={MastersProject.description}
                tags={MastersProject.tags}
                externalLink={MastersProject.externalLink}
                onClick={() => openDialog(MastersProject)}
            />
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-5xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{openProject.title}</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    {openProject.default()}
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>

            </Dialog>
        </>
    )
}

export { Projects }
