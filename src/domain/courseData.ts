import type { CourseCode } from './courseCode';

const baseUrl = 'https://www.pawparentacademy.com';
const enrollmentBaseUrl = 'https://enroll.pawparentacademy.com';

interface CourseData {
  name: string;
  url: string;
  description: string;
  subjects: string[];
  workload?: string;
  enrollmentUrl: string;
}

export const dataMap: Readonly<Record<CourseCode, CourseData>> = {
  nt: {
    name: 'Nail Trims Made Easy',
    url: `${baseUrl}/courses/nail-trims-made-easy`,
    description: 'Learn calm routines, tool handling, and safety techniques so every nail trim—clipper or grinder—feels stress-free for you and your pup.',
    subjects: [ 'Desensitization plans for anxious dogs', 'Clipper and grinder demos for every paw size', 'Tool checklists, troubleshooting, and pro tips' ],
    enrollmentUrl: `${enrollmentBaseUrl}/NT`,
  },
  dm: {
    name: 'Deshedding Mastery',
    url: `${baseUrl}/courses/deshedding-mastery`,
    description: 'Keep shedding under control with expert techniques for all breeds. Learn how to reduce loose fur and maintain a clean, healthy coat year-round.',
    subjects: [ 'Effective tools for de-shedding', 'Techniques for reducing fur buildup', 'Tips for maintaining coat health' ],
    enrollmentUrl: `${enrollmentBaseUrl}/DM`,
  },
  pg: {
    name: 'Paws-itive Grooming',
    url: `${baseUrl}/courses/paws-itive-grooming`,
    description: 'Grooming can be a paws-itive bonding experience for you and your furry friend! Learn to use positive reinforcement to make grooming fun and stress-free for both of you.',
    subjects: [ 'Positive reinforcement', "Overcoming your dog's fear of grooming", 'Making accommodations for your dog' ],
    enrollmentUrl: `${enrollmentBaseUrl}/PG`,
  },
  gd: {
    name: 'How to Groom a Goldendoodle',
    url: `${baseUrl}/courses/how-to-groom-a-goldendoodle`,
    description: 'If your dog has a lush, curly coat, this course is for you! Learn to properly brush out tangles, shape the perfect teddy bear trim, and maintain a healthy curl. You\'ll master every step of the grooming for a happy, well-groomed pooch.',
    subjects: [ 'Step-by-step detangling methods', 'Professional trimming tips', 'Product recommendations for curly coats' ],
    enrollmentUrl: `${enrollmentBaseUrl}/GD`,
  },
  tb: {
    name: 'Teddy Bear Cuts',
    url: `${baseUrl}/courses/teddy-bear-cuts`,
    description: 'Give your pom (and every plush pup) the perfectly rounded, photo-ready teddy bear look at home. Follow detailed prep, scissoring, and finishing lessons that keep double coats full while preventing damage.',
    subjects: [ 'Face, ear, and tail shaping demos tailored to Pomeranians', 'Clipper guard + shear maps for plush density', 'Seasonal maintenance plans with tool + product checklists' ],
    enrollmentUrl: `${enrollmentBaseUrl}/TB`,
  },
  yk: {
    name: 'How to Groom a Yorkie',
    url: `${baseUrl}/courses/how-to-groom-a-yorkie`,
    description: 'Turn every at-home grooming session into a yorkie spa day. Learn how to prep, bathe, and finish silky coats so teddy bear cuts, schnauzer-inspired trims, and glam top knots look polished without salon visits.',
    subjects: [ 'Daily brush maps, tear-stain care, and detangling routines for glassy coats', 'Clipper + scissor blueprints for teddy bear, schnauzer, layered, and top knot styles', 'Seasonal maintenance + product checklists to keep Yorkies comfy year-round' ],
    enrollmentUrl: `${enrollmentBaseUrl}/YK`,
  },
  tr: {
    name: 'How to Groom a Terrier',
    url: `${baseUrl}/courses/how-to-groom-a-terrier`,
    description: 'Wire-coated breeds have a coarse coat that needs special care to stay healthy and looking its best. In this course, you\'ll learn the best techniques, including handstripping and carding, to keep your dog\'s coat in top shape without damaging the coarse top coat.',
    subjects: [ 'Hand-stripping basics', 'Maintaining wiry texture', 'Avoiding skin irritation' ],
    enrollmentUrl: `${enrollmentBaseUrl}/TR`,
  },
  gr: {
    name: 'How to Groom a Golden Retriever',
    url: `${baseUrl}/courses/how-to-groom-a-golden-retriever`,
    description: 'Feathered coats like cocker spaniels need strategic deshedding, silky skirt shaping, and spotless ear care. This course shows you exactly how to prep, trim, and finish every section so double coats stay plush without matting or losing their shine.',
    subjects: [ 'Spaniel-friendly feathering, skirt, and sanitary trims', 'Line brushing + blowout routines that protect the undercoat', 'Ear, paw, and tail care demos to prevent buildup' ],
    enrollmentUrl: `${enrollmentBaseUrl}/GR`,
  },
  pu: {
    name: 'How to Groom a Pug',
    url: `${baseUrl}/courses/how-to-groom-a-pug`,
    description: 'Short, smooth coats still deal with itchy flare-ups, funky odors, and sensitive skin. Learn to choose the right shampoo, build a soothing bath routine, and keep wrinkles, paws, and bellies clean between washes.',
    subjects: [ 'Sensitive-skin bathing blueprint + product picks', 'Wrinkle, paw, and tail-pocket deep cleaning demos', 'Odor-neutralizing drying and coat-care routines' ],
    enrollmentUrl: `${enrollmentBaseUrl}/PU`,
  },
};
