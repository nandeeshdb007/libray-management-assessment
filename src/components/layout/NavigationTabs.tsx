import { tabs } from "@/src/contants/data";
import { NavigationProps } from "@/src/types";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
        breakpoints: {
            '(min-width: 768px)': { active: false }
        }
    });

    useEffect(() => {
        if (!emblaApi) return;

        const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
        if (activeIndex !== -1) {
            emblaApi.scrollTo(activeIndex, true);
        }
    }, [activeTab, emblaApi]);

    return (
        <nav className="bg-white border-b sticky top-20 z-40">
            <div className="hidden md:flex max-w-7xl mx-auto px-6 gap-2 justify-center">
                {tabs.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => onTabChange(id)}
                        className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-all ${activeTab === id
                                ? 'border-blue-600 text-blue-600 bg-blue-50'
                                : 'border-transparent text-slate-600 hover:text-slate-800'
                            }`}
                    >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{label}</span>
                    </button>
                ))}
            </div>

            <div className="md:hidden overflow-hidden" ref={emblaRef}>
                <div className="flex gap-2 px-4">
                    {tabs.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => onTabChange(id)}
                            className={`flex items-center gap-2 px-4 py-4 font-medium border-b-2 transition-all whitespace-nowrap flex-shrink-0 ${activeTab === id
                                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                                    : 'border-transparent text-slate-600 hover:text-slate-800'
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};