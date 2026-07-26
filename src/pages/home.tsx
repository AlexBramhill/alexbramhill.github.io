import {Github} from "../components/icons/Github.tsx";
import {LinkedIn} from "../components/icons/Linkedin.tsx";
import {TextLink} from "../components/text-link.tsx";

const HeaderInfo = () => (
    <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
        <h1 className="text-4xl font-bold">
            Alex <br/>
            Bramhill
        </h1>
        <div className="grid gap-y-6 gap-x-3 mb-2 grid-cols-[auto_auto]">
            <a href="https://github.com/alexbramhill/">
                <Github className="h-7 w-7"/>
            </a>
            <a href="https://www.linkedin.com/in/bramhill/">
                <LinkedIn className="h-7 w-7"/>
            </a>
        </div>
    </div>
);

const About = () => (
    <div>
        <p>
            Full stack tech lead at {" "}
            <TextLink href={new URL("https://www.softwire.com")}>Softwire</TextLink>, working in the financial and
            public sectors.
        </p>
        <p>
            Previously studied and practised architecture at world-leading
            universities and firms, specialising in machine learning and computational
            complex geometry.
        </p>
    </div>
);

export default function Home() {
    return (
        <div className="grid place-items-center min-h-dvh px-5 sm:px-10">
            <div className="grid gap-y-6 max-w-sm">
                <HeaderInfo/>
                <About/>
            </div>
        </div>
    );
}