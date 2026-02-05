"use client";

export default function Education() {
    return (
        <section className="mb-16 md:mb-20">
            <h2 className="text-base font-normal mb-8 md:mb-10">
                Education & Certifications
            </h2>

            <div className="space-y-10 md:space-y-12">
                {/* Academlo */}
                <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
                    <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">
                        2023 - 2024
                    </div>
                    <div>
                        <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                            Academlo
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                            Full-Stack Web Development & Computer Science
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            Ciudad de México • Feb 2023 - 2024
                        </p>
                    </div>
                </div>

                {/* Academia 4.0 */}
                <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
                    <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">
                        2024 - 2025
                    </div>
                    <div>
                        <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                            Academia 4.0
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                            English 4.0 Certification
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            Costa Rica • Aug 2024 - 2025
                        </p>
                    </div>
                </div>

                {/* INA */}
                <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-8">
                    <div className="text-gray-500 hidden sm:inline text-xs sm:text-sm ">
                        2022 - 2023
                    </div>
                    <div>
                        <h3 className="font-normal text-sm sm:text-sm mb-2 md:mb-3">
                            Instituto Nacional de Aprendizaje (INA)
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-sm mb-3 md:mb-4">
                            Customer Service Executive
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            Costa Rica • Sep 2022 - 2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}