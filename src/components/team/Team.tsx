/* eslint-disable @next/next/no-img-element */
'use client'

import Button from "../shared/button/Button";
import TeamMember from "./TeamMember";



const Team = () => {
    return (
        <div className="body_padding grid lg:grid-cols-2 lg:gap-0 gap-4 items-center justify-between">
            <TeamMember />
            <div className="space-y-3">
                <p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis quae suscipit et exercitationem? Iusto ex aut, nam commodi distinctio minus! Asperiores veritatis quos officiis nobis ab quasi odit deserunt quaerat modi quae maiores laboriosam odio molestias, inventore, facere tempore mollitia blanditiis quisquam ad! Totam sint natus animi voluptatum, velit dolorem, beatae ab eveniet at maxime repellendus, fugit quos vitae debitis cupiditate magnam? Repellat natus quisquam, atque corrupti, dolore cupiditate consectetur voluptatem magni quod quis vitae illum iste autem nemo soluta rem ut odio dolorem. Itaque asperiores quia, fuga fugit tempora ipsam ab illo aliquam optio porro autem libero suscipit?</p>

                <div className="flex flex-col items-center justify-center">
                    <Button text="Sign Up" />

                </div>

            </div>
        </div>
    );
};

export default Team;